class NexiaApp {
    constructor() {
        this.currentView = 'editor';
        this.currentPage = 'welcome';
        this.currentTheme = 'light';
        this.timer = {
            isRunning: false,
            isPaused: false,
            currentTime: 25 * 60, // 25 minutes in seconds
            interval: null,
            type: 'pomodoro'
        };
        this.data = {
            pages: [],
            tasks: [],
            settings: {
                theme: 'light',
                timerDuration: 25
            }
        };
        this.commandPaletteVisible = false;
        this.editingTask = null;
        
        this.init();
    }

    async init() {
        await this.initDatabase();
        await this.loadData();
        this.setupEventListeners();
        this.renderCurrentView();
        this.updateTimer();
    }

    async initDatabase() {
        // Using localStorage as fallback for IndexedDB
        if (!localStorage.getItem('nexia_data')) {
            const defaultData = {
                pages: [
                    {
                        id: 'welcome',
                        title: 'Welcome to Nexia',
                        blocks: [
                            {
                                id: 'block-1',
                                type: 'heading',
                                content: 'Welcome to Nexia Beta',
                                level: 1
                            },
                            {
                                id: 'block-2',
                                type: 'text',
                                content: 'Your beautiful, lightweight, and free task management tool.'
                            },
                            {
                                id: 'block-3',
                                type: 'text',
                                content: 'Use the sidebar to navigate between pages and views. Try creating a new task or adding blocks to this page!'
                            }
                        ],
                        createdAt: new Date().toISOString()
                    }
                ],
                tasks: [
                    {
                        id: 'sample-task',
                        title: 'Sample Task',
                        description: 'This is a sample task to get you started',
                        completed: false,
                        priority: 'medium',
                        dueDate: null,
                        tags: ['sample'],
                        createdAt: new Date().toISOString(),
                        status: 'todo'
                    }
                ],
                settings: {
                    theme: 'light',
                    timerDuration: 25
                }
            };
            localStorage.setItem('nexia_data', JSON.stringify(defaultData));
        }
    }

    async loadData() {
        try {
            const stored = localStorage.getItem('nexia_data');
            if (stored) {
                this.data = JSON.parse(stored);
                this.currentTheme = this.data.settings.theme || 'light';
                document.documentElement.setAttribute('data-theme', this.currentTheme);
                this.updateThemeButton();
            }
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }

    async saveData() {
        try {
            localStorage.setItem('nexia_data', JSON.stringify(this.data));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    setupEventListeners() {
        // Header events
        document.getElementById('sidebarToggle').addEventListener('click', this.toggleSidebar.bind(this));
        document.getElementById('themeToggle').addEventListener('click', this.toggleTheme.bind(this));
        document.getElementById('addButton').addEventListener('click', this.showAddMenu.bind(this));
        document.getElementById('searchInput').addEventListener('input', this.handleSearch.bind(this));

        // Sidebar events
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-page]')) {
                e.preventDefault();
                this.switchPage(e.target.dataset.page);
            }
            if (e.target.matches('.view-toggle')) {
                this.switchView(e.target.dataset.view);
            }
        });

        document.getElementById('addPageBtn').addEventListener('click', this.addNewPage.bind(this));

        // Timer events
        document.getElementById('startTimer').addEventListener('click', this.startTimer.bind(this));
        document.getElementById('pauseTimer').addEventListener('click', this.pauseTimer.bind(this));
        document.getElementById('resetTimer').addEventListener('click', this.resetTimer.bind(this));
        document.getElementById('timerType').addEventListener('change', this.changeTimerType.bind(this));

        // Editor events
        document.addEventListener('click', (e) => {
            if (e.target.matches('.add-block-btn')) {
                this.addBlock(e.target.dataset.type);
            }
        });

        // Task management events
        document.getElementById('addTaskBtn').addEventListener('click', this.showTaskModal.bind(this));
        document.getElementById('saveTask').addEventListener('click', this.saveTask.bind(this));
        document.getElementById('cancelTask').addEventListener('click', this.hideTaskModal.bind(this));
        document.getElementById('closeTaskModal').addEventListener('click', this.hideTaskModal.bind(this));

        // Filter events
        document.getElementById('filterPriority').addEventListener('change', this.filterTasks.bind(this));

        // Export button
        document.getElementById('exportBtn').addEventListener('click', this.exportData.bind(this));

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for command palette
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.toggleCommandPalette();
            }
            // Escape to close modals
            if (e.key === 'Escape') {
                this.hideTaskModal();
                this.hideCommandPalette();
            }
        });

        // Command palette events
        document.getElementById('commandInput').addEventListener('input', this.filterCommands.bind(this));
        document.addEventListener('click', (e) => {
            if (e.target.matches('.command-item')) {
                this.executeCommand(e.target.dataset.command);
            }
        });

        // Modal backdrop click
        document.getElementById('taskModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.hideTaskModal();
            }
        });

        document.getElementById('commandPalette').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                this.hideCommandPalette();
            }
        });

        // Auto-save on input
        document.addEventListener('input', this.debounce(this.saveData.bind(this), 500));
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Theme Management
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.data.settings.theme = this.currentTheme;
        this.updateThemeButton();
        this.saveData();
    }

    updateThemeButton() {
        const btn = document.getElementById('themeToggle');
        btn.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }

    // Sidebar Management
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('active');
    }

    // View Management
    switchView(viewName) {
        this.currentView = viewName;
        
        // Update active view toggle
        document.querySelectorAll('.view-toggle').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

        this.renderCurrentView();
    }

    renderCurrentView() {
        // Hide all views
        document.querySelectorAll('.content-view').forEach(view => {
            view.classList.add('hidden');
        });

        // Show current view
        const viewElement = document.getElementById(`${this.currentView}View`);
        if (viewElement) {
            viewElement.classList.remove('hidden');
        }

        // Render view content
        switch (this.currentView) {
            case 'editor':
                this.renderEditor();
                break;
            case 'table':
                this.renderTableView();
                break;
            case 'kanban':
                this.renderKanbanView();
                break;
            case 'list':
                this.renderListView();
                break;
            case 'calendar':
                this.renderCalendarView();
                break;
        }
    }

    // Page Management
    switchPage(pageId) {
        this.currentPage = pageId;
        
        // Update active page in sidebar
        document.querySelectorAll('.sidebar__item').forEach(item => {
            item.classList.remove('sidebar__item--active');
        });
        const activeItem = document.querySelector(`[data-page="${pageId}"]`)?.closest('.sidebar__item');
        if (activeItem) {
            activeItem.classList.add('sidebar__item--active');
        }

        this.renderEditor();
    }

    addNewPage() {
        const title = prompt('ページタイトルを入力してください:');
        if (!title) return;

        const newPage = {
            id: `page-${Date.now()}`,
            title: title,
            blocks: [
                {
                    id: `block-${Date.now()}`,
                    type: 'heading',
                    content: title,
                    level: 1
                }
            ],
            createdAt: new Date().toISOString()
        };

        this.data.pages.push(newPage);
        this.saveData();
        this.renderPagesList();
        this.switchPage(newPage.id);
    }

    renderPagesList() {
        const list = document.getElementById('pagesList');
        list.innerHTML = this.data.pages.map(page => `
            <li class="sidebar__item ${page.id === this.currentPage ? 'sidebar__item--active' : ''}">
                <a href="#" data-page="${page.id}">📝 ${page.title}</a>
            </li>
        `).join('');
    }

    // Editor Management
    renderEditor() {
        const currentPage = this.data.pages.find(p => p.id === this.currentPage);
        if (!currentPage) return;

        document.getElementById('pageTitle').textContent = currentPage.title;
        
        const container = document.getElementById('editorContainer');
        container.innerHTML = currentPage.blocks.map(block => this.renderBlock(block)).join('');

        // Add event listeners to blocks
        container.addEventListener('input', (e) => {
            if (e.target.matches('.block__content')) {
                this.updateBlockContent(e.target);
            }
        });

        container.addEventListener('change', (e) => {
            if (e.target.matches('.task-checkbox')) {
                this.toggleTaskBlock(e.target);
            }
        });
    }

    renderBlock(block) {
        switch (block.type) {
            case 'heading':
                return `
                    <div class="block block--heading-${block.level || 1}" data-block-id="${block.id}">
                        <input type="text" class="block__content" value="${block.content || ''}" placeholder="見出しを入力...">
                    </div>
                `;
            case 'text':
                return `
                    <div class="block block--text" data-block-id="${block.id}">
                        <textarea class="block__content" placeholder="テキストを入力..." rows="3">${block.content || ''}</textarea>
                    </div>
                `;
            case 'task':
                return `
                    <div class="block block--task" data-block-id="${block.id}">
                        <input type="checkbox" class="task-checkbox" ${block.completed ? 'checked' : ''}>
                        <input type="text" class="block__content" value="${block.content || ''}" placeholder="タスクを入力...">
                    </div>
                `;
            case 'divider':
                return `<div class="block block--divider" data-block-id="${block.id}"></div>`;
            default:
                return `
                    <div class="block block--text" data-block-id="${block.id}">
                        <textarea class="block__content" placeholder="テキストを入力..." rows="3">${block.content || ''}</textarea>
                    </div>
                `;
        }
    }

    addBlock(type) {
        const currentPage = this.data.pages.find(p => p.id === this.currentPage);
        if (!currentPage) return;

        const newBlock = {
            id: `block-${Date.now()}`,
            type: type,
            content: '',
            level: type === 'heading' ? 1 : undefined,
            completed: type === 'task' ? false : undefined
        };

        currentPage.blocks.push(newBlock);
        this.saveData();
        this.renderEditor();
    }

    updateBlockContent(element) {
        const blockElement = element.closest('.block');
        const blockId = blockElement.dataset.blockId;
        const currentPage = this.data.pages.find(p => p.id === this.currentPage);
        
        if (currentPage) {
            const block = currentPage.blocks.find(b => b.id === blockId);
            if (block) {
                block.content = element.value;
            }
        }
    }

    toggleTaskBlock(checkbox) {
        const blockElement = checkbox.closest('.block');
        const blockId = blockElement.dataset.blockId;
        const currentPage = this.data.pages.find(p => p.id === this.currentPage);
        
        if (currentPage) {
            const block = currentPage.blocks.find(b => b.id === blockId);
            if (block) {
                block.completed = checkbox.checked;
            }
        }
    }

    // Task Management
    showTaskModal(task = null) {
        this.editingTask = task;
        const modal = document.getElementById('taskModal');
        const title = document.getElementById('taskModalTitle');
        const form = document.getElementById('taskForm');

        if (task) {
            title.textContent = 'タスクを編集';
            document.getElementById('taskTitle').value = task.title || '';
            document.getElementById('taskDescription').value = task.description || '';
            document.getElementById('taskPriority').value = task.priority || 'medium';
            document.getElementById('taskDueDate').value = task.dueDate || '';
            document.getElementById('taskTags').value = task.tags ? task.tags.join(', ') : '';
        } else {
            title.textContent = '新しいタスク';
            form.reset();
        }

        modal.classList.add('active');
    }

    hideTaskModal() {
        const modal = document.getElementById('taskModal');
        modal.classList.remove('active');
        this.editingTask = null;
    }

    saveTask() {
        const title = document.getElementById('taskTitle').value.trim();
        if (!title) return;

        const taskData = {
            title: title,
            description: document.getElementById('taskDescription').value.trim(),
            priority: document.getElementById('taskPriority').value,
            dueDate: document.getElementById('taskDueDate').value || null,
            tags: document.getElementById('taskTags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
            completed: false,
            status: 'todo'
        };

        if (this.editingTask) {
            // Update existing task
            Object.assign(this.editingTask, taskData);
        } else {
            // Create new task
            const newTask = {
                id: `task-${Date.now()}`,
                ...taskData,
                createdAt: new Date().toISOString()
            };
            this.data.tasks.push(newTask);
        }

        this.saveData();
        this.hideTaskModal();
        this.renderCurrentView();
    }

    deleteTask(taskId) {
        if (confirm('このタスクを削除しますか？')) {
            this.data.tasks = this.data.tasks.filter(task => task.id !== taskId);
            this.saveData();
            this.renderCurrentView();
        }
    }

    toggleTaskComplete(taskId) {
        const task = this.data.tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            task.status = task.completed ? 'completed' : 'todo';
            this.saveData();
            this.renderCurrentView();
        }
    }

    // View Renderers
    renderTableView() {
        const tbody = document.getElementById('tasksTableBody');
        const tasks = this.getFilteredTasks();
        
        tbody.innerHTML = tasks.map(task => `
            <tr>
                <td>
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                           onchange="app.toggleTaskComplete('${task.id}')">
                </td>
                <td>
                    <div class="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}</div>
                    ${task.description ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${task.description}</div>` : ''}
                </td>
                <td>
                    <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                </td>
                <td>${task.dueDate ? new Date(task.dueDate).toLocaleDateString('ja-JP') : '-'}</td>
                <td>
                    ${task.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </td>
                <td>
                    <button class="btn btn--sm btn--outline" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">編集</button>
                    <button class="btn btn--sm btn--outline" onclick="app.deleteTask('${task.id}')" style="margin-left: 8px; color: var(--color-error);">削除</button>
                </td>
            </tr>
        `).join('');
    }

    renderKanbanView() {
        const todoTasks = this.data.tasks.filter(task => !task.completed);
        const inProgressTasks = this.data.tasks.filter(task => task.status === 'in-progress');
        const completedTasks = this.data.tasks.filter(task => task.completed);

        document.getElementById('todoTasks').innerHTML = todoTasks.map(task => this.renderKanbanTask(task)).join('');
        document.getElementById('inProgressTasks').innerHTML = inProgressTasks.map(task => this.renderKanbanTask(task)).join('');
        document.getElementById('completedTasks').innerHTML = completedTasks.map(task => this.renderKanbanTask(task)).join('');
    }

    renderKanbanTask(task) {
        return `
            <div class="kanban-task" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">
                <div style="font-weight: 500; margin-bottom: 8px;">${task.title}</div>
                ${task.description ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">${task.description}</div>` : ''}
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                    ${task.dueDate ? `<span style="font-size: 11px; color: var(--color-text-secondary);">${new Date(task.dueDate).toLocaleDateString('ja-JP')}</span>` : ''}
                </div>
            </div>
        `;
    }

    renderListView() {
        const list = document.getElementById('tasksList');
        const tasks = this.getFilteredTasks();
        
        list.innerHTML = tasks.map(task => `
            <div class="task-item" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">
                <input type="checkbox" class="task-item__check" ${task.completed ? 'checked' : ''} 
                       onclick="event.stopPropagation(); app.toggleTaskComplete('${task.id}')">
                <div class="task-item__content">
                    <div class="task-item__title" style="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}</div>
                    <div class="task-item__meta">
                        <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                        ${task.dueDate ? `<span>期限: ${new Date(task.dueDate).toLocaleDateString('ja-JP')}</span>` : ''}
                        ${task.tags.length > 0 ? `<span>${task.tags.map(tag => `#${tag}`).join(' ')}</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderCalendarView() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        
        document.getElementById('calendarMonth').textContent = `${year}年${month + 1}月`;
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - firstDay.getDay());
        
        const grid = document.getElementById('calendarGrid');
        let html = '';
        
        // Header row
        const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
        weekdays.forEach(day => {
            html += `<div style="padding: 8px; font-weight: 600; text-align: center; background: var(--color-secondary);">${day}</div>`;
        });
        
        // Calendar days
        for (let i = 0; i < 42; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            
            const isCurrentMonth = currentDate.getMonth() === month;
            const isToday = currentDate.toDateString() === now.toDateString();
            const tasksForDay = this.data.tasks.filter(task => 
                task.dueDate && new Date(task.dueDate).toDateString() === currentDate.toDateString()
            );
            
            html += `
                <div class="calendar-day ${!isCurrentMonth ? 'calendar-day--other-month' : ''} ${isToday ? 'calendar-day--today' : ''}">
                    <div style="font-weight: 500;">${currentDate.getDate()}</div>
                    ${tasksForDay.map(task => `
                        <div style="font-size: 10px; background: var(--color-primary); color: white; border-radius: 3px; padding: 2px 4px; margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                            ${task.title}
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        grid.innerHTML = html;
    }

    getFilteredTasks() {
        const priorityFilter = document.getElementById('filterPriority').value;
        let tasks = [...this.data.tasks];
        
        if (priorityFilter) {
            tasks = tasks.filter(task => task.priority === priorityFilter);
        }
        
        return tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    getPriorityText(priority) {
        switch (priority) {
            case 'high': return '高';
            case 'medium': return '中';
            case 'low': return '低';
            default: return '中';
        }
    }

    filterTasks() {
        this.renderCurrentView();
    }

    // Timer Management
    startTimer() {
        if (!this.timer.isRunning) {
            this.timer.isRunning = true;
            this.timer.isPaused = false;
            this.timer.interval = setInterval(() => {
                if (this.timer.type === 'stopwatch') {
                    this.timer.currentTime++;
                } else {
                    this.timer.currentTime--;
                    if (this.timer.currentTime <= 0) {
                        this.timerComplete();
                    }
                }
                this.updateTimer();
            }, 1000);
            
            document.getElementById('startTimer').textContent = '実行中...';
        }
    }

    pauseTimer() {
        if (this.timer.isRunning) {
            this.timer.isRunning = false;
            this.timer.isPaused = true;
            clearInterval(this.timer.interval);
            document.getElementById('startTimer').textContent = '再開';
        }
    }

    resetTimer() {
        this.timer.isRunning = false;
        this.timer.isPaused = false;
        clearInterval(this.timer.interval);
        
        const type = document.getElementById('timerType').value;
        if (type === 'pomodoro') {
            this.timer.currentTime = 25 * 60;
        } else if (type === 'stopwatch') {
            this.timer.currentTime = 0;
        } else {
            this.timer.currentTime = 25 * 60; // Default to 25 minutes
        }
        
        this.updateTimer();
        document.getElementById('startTimer').textContent = '開始';
    }

    changeTimerType() {
        const type = document.getElementById('timerType').value;
        this.timer.type = type;
        this.resetTimer();
    }

    updateTimer() {
        const display = document.getElementById('timerDisplay');
        const minutes = Math.floor(Math.abs(this.timer.currentTime) / 60);
        const seconds = Math.abs(this.timer.currentTime) % 60;
        
        if (this.timer.type === 'stopwatch') {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        } else {
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    timerComplete() {
        this.resetTimer();
        alert('タイマーが完了しました！');
        
        // Browser notification if supported
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Nexia Beta', {
                body: 'タイマーが完了しました！',
                icon: '/favicon.ico'
            });
        }
    }

    // Search
    handleSearch(e) {
        const query = e.target.value.toLowerCase();
        if (!query) {
            this.renderCurrentView();
            return;
        }

        // Filter tasks based on search query
        const filteredTasks = this.data.tasks.filter(task => 
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query) ||
            task.tags.some(tag => tag.toLowerCase().includes(query))
        );

        // Update current view with filtered results
        if (this.currentView === 'table') {
            this.renderFilteredTableView(filteredTasks);
        } else if (this.currentView === 'list') {
            this.renderFilteredListView(filteredTasks);
        }
    }

    renderFilteredTableView(tasks) {
        const tbody = document.getElementById('tasksTableBody');
        tbody.innerHTML = tasks.map(task => `
            <tr>
                <td>
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                           onchange="app.toggleTaskComplete('${task.id}')">
                </td>
                <td>
                    <div class="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}</div>
                    ${task.description ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${task.description}</div>` : ''}
                </td>
                <td>
                    <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                </td>
                <td>${task.dueDate ? new Date(task.dueDate).toLocaleDateString('ja-JP') : '-'}</td>
                <td>
                    ${task.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </td>
                <td>
                    <button class="btn btn--sm btn--outline" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">編集</button>
                    <button class="btn btn--sm btn--outline" onclick="app.deleteTask('${task.id}')" style="margin-left: 8px; color: var(--color-error);">削除</button>
                </td>
            </tr>
        `).join('');
    }

    renderFilteredListView(tasks) {
        const list = document.getElementById('tasksList');
        list.innerHTML = tasks.map(task => `
            <div class="task-item" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">
                <input type="checkbox" class="task-item__check" ${task.completed ? 'checked' : ''} 
                       onclick="event.stopPropagation(); app.toggleTaskComplete('${task.id}')">
                <div class="task-item__content">
                    <div class="task-item__title" style="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}</div>
                    <div class="task-item__meta">
                        <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                        ${task.dueDate ? `<span>期限: ${new Date(task.dueDate).toLocaleDateString('ja-JP')}</span>` : ''}
                        ${task.tags.length > 0 ? `<span>${task.tags.map(tag => `#${tag}`).join(' ')}</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Command Palette
    toggleCommandPalette() {
        const palette = document.getElementById('commandPalette');
        this.commandPaletteVisible = !this.commandPaletteVisible;
        
        if (this.commandPaletteVisible) {
            palette.classList.add('active');
            document.getElementById('commandInput').focus();
        } else {
            palette.classList.remove('active');
        }
    }

    hideCommandPalette() {
        const palette = document.getElementById('commandPalette');
        palette.classList.remove('active');
        this.commandPaletteVisible = false;
    }

    filterCommands(e) {
        const query = e.target.value.toLowerCase();
        const results = document.getElementById('commandResults');
        const commands = results.querySelectorAll('.command-item');
        
        commands.forEach(cmd => {
            const text = cmd.textContent.toLowerCase();
            cmd.style.display = text.includes(query) ? 'block' : 'none';
        });
    }

    executeCommand(command) {
        switch (command) {
            case 'new-task':
                this.showTaskModal();
                break;
            case 'new-page':
                this.addNewPage();
                break;
            case 'export':
                this.exportData();
                break;
            case 'toggle-theme':
                this.toggleTheme();
                break;
        }
        this.hideCommandPalette();
    }

    showAddMenu() {
        const menu = [
            { text: '新しいタスク', action: () => this.showTaskModal() },
            { text: '新しいページ', action: () => this.addNewPage() },
            { text: 'ブロックを追加', action: () => this.addBlock('text') }
        ];
        
        // Simple implementation - show task modal by default
        this.showTaskModal();
    }

    // Data Export/Import
    exportData() {
        const data = {
            ...this.data,
            exportedAt: new Date().toISOString(),
            version: '1.0.0'
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `nexia-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    // Initialize app
    async start() {
        // Request notification permission
        if ('Notification' in window && Notification.permission === 'default') {
            await Notification.requestPermission();
        }
        
        this.renderPagesList();
        this.switchView('editor');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new NexiaApp();
    app.start();
});