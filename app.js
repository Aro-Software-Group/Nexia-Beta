class NexiaApp {
    constructor() {
        this.currentView = 'editor';
        this.currentPage = 'welcome';
        this.currentTheme = 'light';
        this.lang = 'ja';
        this.translations = {
            ja: {
                app_name: 'Nexia Beta',
                tagline: 'Connect. Organize. Achieve.',
                search_placeholder: '検索...',
                add_new: '+ 新規',
                pages: 'ページ',
                views: '表示',
                timer: 'タイマー',
                start: '開始',
                pause: '一時停止',
                reset: 'リセット',
                pomodoro: 'ポモドーロ (25分)',
                custom: 'カスタム',
                stopwatch: 'ストップウォッチ',
                minutes: '分',
                add_page: '+ ページ追加',
                table: 'テーブル',
                kanban: 'カンバン',
                list: 'リスト',
                calendar: 'カレンダー',
                export: 'エクスポート',
                import: 'インポート',
                page_settings: '設定',
                block_heading: '見出し',
                block_text: 'テキスト',
                block_task: 'タスク',
                block_checklist: 'チェックリスト',
                block_divider: '区切り線',
                tasks_list: 'タスク一覧',
                all_priorities: 'すべての優先度',
                priority_high: '高',
                priority_medium: '中',
                priority_low: '低',
                add_task: '+ タスク追加',
                table_complete: '完了',
                table_task: 'タスク名',
                table_priority: '優先度',
                table_due: '期限',
                table_tags: 'タグ',
                table_time: '時間',
                table_actions: '操作',
                start_tracking: '計測開始',
                stop_tracking: '計測停止',
                kanban_board: 'カンバンボード',
                todo: 'Todo',
                in_progress: '進行中',
                completed: '完了',
                list_view: 'リスト表示',
                settings: '設定',
                others: 'その他',
                settings_username: 'ユーザーネーム',
                settings_language: '言語',
                settings_theme: 'テーマ',
                settings_clear_design: "クリアデザイン",
                clear_design_disabled: "無効",
                clear_design_enabled: "有効",
                theme_light: 'ライト',
                theme_dark: 'ダーク',
                command_placeholder: 'コマンドを入力...',
                cmd_new_task: '新しいタスク',
                cmd_new_page: '新しいページ',
                cmd_export: 'エクスポート',
                cmd_import: 'インポート',
                cmd_toggle_theme: 'テーマ切り替え',
                task_modal_title: 'タスクを編集',
                task_name: 'タスク名',
                description: '説明',
                priority: '優先度',
                due_date: '期限',
                tags: 'タグ (カンマ区切り)',
                subtasks: 'サブタスク (改行区切り)',
                cancel: 'キャンセル',
                save: '保存',
                tags_placeholder: '仕事, 重要',
                subtasks_placeholder: 'サブタスク1\nサブタスク2',
                command_new: '新規追加',
                minutes_placeholder: '分',
                settings_saved: '設定を保存しました',
                changelog: '更新履歴',
                changelog_v1: '初期リリース、多言語対応を追加',
                changelog_v101_beta_clear_design: "設定に「クリアデザイン」オプションを追加し、余白、滑らかなアニメーション、透明感・ガラス感、立体感を特徴とする新しいUI体験を導入しました。",
                recurrence_type: '繰り返しタイプ',
                recurrence_none: 'なし',
                recurrence_daily: '毎日',
                recurrence_weekly: '毎週',
                recurrence_monthly: '毎月',
                recurrence_interval: '間隔 (例: 1 = 毎日/毎週/毎月)',
                task_reminder: 'リマインダー設定',
                reminder_triggered_title: 'タスクリマインダー',
                reminder_triggered_body: 'タスク「%taskName%」の時間です!',
                dashboard: 'ダッシュボード',
                dashboard_title: 'ダッシュボード',
                tasks_overview: 'タスク概要',
                total_tasks: '総タスク数:',
                completed_tasks: '完了タスク:',
                pending_tasks: '未完了タスク:',
                task_status_chart: 'タスクステータス'
            },
            en: {
                app_name: 'Nexia Beta',
                tagline: 'Connect. Organize. Achieve.',
                search_placeholder: 'Search...',
                add_new: '+ New',
                pages: 'Pages',
                views: 'Views',
                timer: 'Timer',
                start: 'Start',
                pause: 'Pause',
                reset: 'Reset',
                pomodoro: 'Pomodoro (25m)',
                custom: 'Custom',
                stopwatch: 'Stopwatch',
                minutes: 'min',
                add_page: '+ Add Page',
                table: 'Table',
                kanban: 'Kanban',
                list: 'List',
                calendar: 'Calendar',
                export: 'Export',
                import: 'Import',
                page_settings: 'Settings',
                block_heading: 'Heading',
                block_text: 'Text',
                block_task: 'Task',
                block_checklist: 'Checklist',
                block_divider: 'Divider',
                tasks_list: 'Tasks',
                all_priorities: 'All Priorities',
                priority_high: 'High',
                priority_medium: 'Medium',
                priority_low: 'Low',
                add_task: '+ Add Task',
                table_complete: 'Done',
                table_task: 'Task',
                table_priority: 'Priority',
                table_due: 'Due',
                table_tags: 'Tags',
                table_time: 'Time',
                table_actions: 'Actions',
                start_tracking: 'Start',
                stop_tracking: 'Stop',
                kanban_board: 'Kanban Board',
                todo: 'Todo',
                in_progress: 'In Progress',
                completed: 'Completed',
                list_view: 'List View',
                settings: 'Settings',
                others: 'Others',
                settings_username: 'Username',
                settings_language: 'Language',
                settings_theme: 'Theme',
                settings_clear_design: "Clear Design",
                clear_design_disabled: "Disabled",
                clear_design_enabled: "Enabled",
                theme_light: 'Light',
                theme_dark: 'Dark',
                command_placeholder: 'Type a command...',
                cmd_new_task: 'New Task',
                cmd_new_page: 'New Page',
                cmd_export: 'Export',
                cmd_import: 'Import',
                cmd_toggle_theme: 'Toggle Theme',
                task_modal_title: 'Edit Task',
                task_name: 'Task Name',
                description: 'Description',
                priority: 'Priority',
                due_date: 'Due Date',
                tags: 'Tags (comma separated)',
                subtasks: 'Subtasks (one per line)',
                cancel: 'Cancel',
                save: 'Save',
                tags_placeholder: 'work, important',
                subtasks_placeholder: 'Subtask1\nSubtask2',
                command_new: 'New',
                minutes_placeholder: 'min',
                settings_saved: 'Settings saved',
                changelog: 'Changelog',
                changelog_v1: 'Initial release with multi-language support',
                changelog_v101_beta_clear_design: "Added 'Clear Design' option in settings, introducing a new UI experience featuring enhanced whitespace, smooth animations, transparency/glassmorphism, and a spatial/3D feel.",
                recurrence_type: 'Recurrence Type',
                recurrence_none: 'None',
                recurrence_daily: 'Daily',
                recurrence_weekly: 'Weekly',
                recurrence_monthly: 'Monthly',
                recurrence_interval: 'Interval (e.g., 1 for every day/week/month)',
                task_reminder: 'Set Reminder',
                reminder_triggered_title: 'Task Reminder',
                reminder_triggered_body: 'It\'s time for your task: "%taskName%"!',
                dashboard: 'Dashboard',
                dashboard_title: 'Dashboard',
                tasks_overview: 'Tasks Overview',
                total_tasks: 'Total Tasks:',
                completed_tasks: 'Completed Tasks:',
                pending_tasks: 'Pending Tasks:',
                task_status_chart: 'Task Status'
            },
            ko: {
                app_name: 'Nexia Beta',
                tagline: 'Connect. Organize. Achieve.',
                search_placeholder: '검색...',
                add_new: '+ 새로 만들기',
                pages: '페이지',
                views: '보기',
                timer: '타이머',
                start: '시작',
                pause: '일시 중지',
                reset: '재설정',
                pomodoro: '포모도로 (25분)',
                custom: '사용자 지정',
                stopwatch: '스톱워치',
                minutes: '분',
                add_page: '+ 페이지 추가',
                table: '테이블',
                kanban: '칸반',
                list: '리스트',
                calendar: '캘린더',
                export: '내보내기',
                import: '가져오기',
                page_settings: '설정',
                block_heading: '제목',
                block_text: '텍스트',
                block_task: '작업',
                block_checklist: '체크리스트',
                block_divider: '구분선',
                tasks_list: '작업 목록',
                all_priorities: '모든 우선순위',
                priority_high: '높음',
                priority_medium: '중간',
                priority_low: '낮음',
                add_task: '+ 작업 추가',
                table_complete: '완료',
                table_task: '작업',
                table_priority: '우선순위',
                table_due: '마감',
                table_tags: '태그',
                table_time: '시간',
                table_actions: '동작',
                start_tracking: '시작',
                stop_tracking: '정지',
                kanban_board: '칸반 보드',
                todo: '할 일',
                in_progress: '진행 중',
                completed: '완료됨',
                list_view: '리스트 보기',
                settings: '설정',
                others: '기타',
                settings_username: '사용자 이름',
                settings_language: '언어',
                settings_theme: '테마',
                settings_clear_design: "클리어 디자인",
                clear_design_disabled: "비활성화",
                clear_design_enabled: "활성화",
                theme_light: '라이트',
                theme_dark: '다크',
                command_placeholder: '명령 입력...',
                cmd_new_task: '새 작업',
                cmd_new_page: '새 페이지',
                cmd_export: '내보내기',
                cmd_import: '가져오기',
                cmd_toggle_theme: '테마 전환',
                task_modal_title: '작업 편집',
                task_name: '작업명',
                description: '설명',
                priority: '우선순위',
                due_date: '마감일',
                tags: '태그 (쉼표 구분)',
                subtasks: '하위 작업 (줄마다 하나)',
                cancel: '취소',
                save: '저장',
                tags_placeholder: '업무, 중요',
                subtasks_placeholder: '하위작업1\n하위작업2',
                command_new: '새로 만들기',
                minutes_placeholder: '분',
                settings_saved: '설정이 저장되었습니다',
                changelog: '변경 기록',
                changelog_v1: '초기 릴리스, 다국어 지원 추가',
                changelog_v101_beta_clear_design: "설정에 '클리어 디자인' 옵션을 추가하여 여백, 부드러운 애니메이션, 투명도/유리 질감, 공간적/입체적 느낌을 특징으로 하는 새로운 UI 경험을 도입했습니다.",
                recurrence_type: '반복 유형',
                recurrence_none: '없음',
                recurrence_daily: '매일',
                recurrence_weekly: '매주',
                recurrence_monthly: '매월',
                recurrence_interval: '간격 (예: 1 = 매일/매주/매월)',
                task_reminder: '리마인더 설정',
                reminder_triggered_title: '작업 알림',
                reminder_triggered_body: '작업 "%taskName%" 시간입니다!',
                dashboard: '대시보드',
                dashboard_title: '대시보드',
                tasks_overview: '작업 개요',
                total_tasks: '총 작업 수:',
                completed_tasks: '완료된 작업:',
                pending_tasks: '보류 중인 작업:',
                task_status_chart: '작업 상태'
            }
        };
        this.timer = {
            isRunning: false,
            isPaused: false,
            currentTime: 25 * 60, // 25 minutes in seconds
            interval: null,
            type: 'pomodoro',
            customDuration: 25
        };
        this.taskTimer = { taskId: null, interval: null };
        this.data = {
            pages: [],
            tasks: [],
            settings: {
                theme: 'light',
                timerDuration: 25,
                language: 'ja',
                username: 'Guest',
                clearDesignEnabled: false
            }
        };
        this.commandPaletteVisible = false;
        this.editingTask = null;
        this.calendarDate = new Date();

        this.init();
    }

    async init() {
        await this.initDatabase();
        await this.loadData();
        this.setupEventListeners();
        this.applyTranslations();
        this.renderCurrentView();
        this.updateTimer();
        this.applyClearDesign();
    }

    async initDatabase() {
        let needsInitialization = true;
        const storedData = localStorage.getItem('nexia_data');

        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                // Check for essential structure, e.g., if pages array exists
                if (parsedData && Array.isArray(parsedData.pages)) {
                    needsInitialization = false;
                }
            } catch (e) {
                // JSON parsing failed, so data is corrupt, needs re-initialization
                console.warn('Corrupted data found in localStorage, re-initializing.', e);
            }
        }

        if (needsInitialization) {
            console.log('Initializing with default data.');
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
                        subtasks: [],
                        createdAt: new Date().toISOString(),
                        status: 'todo'
                        // recurrence will be added dynamically if not present
                    }
                ],
                settings: {
                    theme: 'light',
                    timerDuration: 25,
                    language: 'ja',
                    username: 'Guest'
                }
            };
            localStorage.setItem('nexia_data', JSON.stringify(defaultData));
        }
    }

    async loadData() {
        // Initialize with a base structure to ensure critical parts are defined
        this.data = {
            pages: [],
            tasks: [],
            settings: {
                theme: 'light',
                timerDuration: 25,
                language: 'ja',
                username: 'Guest',
                clearDesignEnabled: false
            }
        };

        try {
            const stored = localStorage.getItem('nexia_data');
            if (stored) {
                const parsedData = JSON.parse(stored);

                // Merge stored data, ensuring pages and tasks are arrays
                this.data.pages = Array.isArray(parsedData.pages) ? parsedData.pages : [];
                this.data.tasks = Array.isArray(parsedData.tasks) ? parsedData.tasks : [];

                // Ensure all tasks have a recurrence field (for backward compatibility)
                this.data.tasks.forEach(task => {
                    if (!task.recurrence) {
                        task.recurrence = { type: 'none', interval: 1 };
                    }
                    if (task.reminderDate === undefined) { // Check if reminderDate is missing
                        task.reminderDate = null;
                    }
                    if (task.reminderShown === undefined) { // Check if reminderShown is missing
                        task.reminderShown = false;
                    }
                    if (task.timeSpent === undefined) {
                        task.timeSpent = 0;
                    }
                });


                if (parsedData.settings) {
                    this.data.settings = { ...this.data.settings, ...parsedData.settings };
                }

                this.currentTheme = this.data.settings.theme || 'light';
                this.lang = this.data.settings.language || 'ja';
                document.documentElement.setAttribute('data-theme', this.currentTheme);
                document.documentElement.setAttribute('lang', this.lang);
                this.updateThemeButton();
                this.data.settings.clearDesignEnabled = parsedData.settings.clearDesignEnabled === true; // Default to false if undefined
                this.applyClearDesign();
            }
        } catch (error) {
            console.error('Error loading data:', error);
            // this.data is already initialized with safe defaults, so app can continue
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
        document.getElementById('customTimerInput').addEventListener('change', (e) => {
            const val = parseInt(e.target.value, 10);
            if (!isNaN(val) && val > 0) {
                this.timer.customDuration = val;
                if (this.timer.type === 'custom') {
                    this.resetTimer();
                }
            }
        });

        // Calendar navigation
        document.getElementById('prevMonth').addEventListener('click', () => {
            this.calendarDate.setMonth(this.calendarDate.getMonth() - 1);
            this.renderCalendarView();
        });
        document.getElementById('nextMonth').addEventListener('click', () => {
            this.calendarDate.setMonth(this.calendarDate.getMonth() + 1);
            this.renderCalendarView();
        });

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
        document.getElementById('importBtn').addEventListener('click', () => document.getElementById('importInput').click());
        document.getElementById('importInput').addEventListener('change', (e) => {
            if (e.target.files[0]) {
                this.importData(e.target.files[0]);
                e.target.value = '';
            }
        });

        document.getElementById('saveSettingsBtn').addEventListener('click', this.saveSettings.bind(this));

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

    t(key) {
        return (this.translations[this.lang] && this.translations[this.lang][key]) || key;
    }

    applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = this.t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = this.t(el.dataset.i18nPlaceholder);
        });
        document.documentElement.setAttribute('lang', this.lang);
        this.updateThemeButton();
    }

    saveSettings() {
        this.data.settings.username = document.getElementById('usernameInput').value;
        this.data.settings.language = document.getElementById('languageSelect').value;
        this.data.settings.theme = document.getElementById('themeSelect').value;
        this.data.settings.clearDesignEnabled = document.getElementById('clearDesignSelect').value === 'true';
        this.currentTheme = this.data.settings.theme;
        this.lang = this.data.settings.language;
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.applyClearDesign();
        this.applyTranslations();
        this.saveData();
        alert(this.t('settings_saved'));
    }

    applyClearDesign() {
        const isEnabled = this.data.settings.clearDesignEnabled;
        if (isEnabled) {
            document.documentElement.setAttribute('data-clear-design', 'true');
        } else {
            document.documentElement.removeAttribute('data-clear-design');
        }
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
            case 'settings':
                this.renderSettingsView();
                break;
            case 'changelog':
                this.renderChangelogView();
                break;
                case 'dashboard':
                    this.renderDashboardView();
                    break;
        }
        this.applyTranslations();
    }

    renderDashboardView() {
        document.getElementById('totalTasks').textContent = this.data.tasks.length;
        const completedCount = this.data.tasks.filter(t => t.completed).length;
        document.getElementById('completedTasksCount').textContent = completedCount;
        document.getElementById('pendingTasksCount').textContent = this.data.tasks.length - completedCount;

        const chartContainer = document.getElementById('taskStatusChart');
        chartContainer.innerHTML = ''; // Clear previous chart

        const statuses = { todo: 0, 'in-progress': 0, completed: 0 };
        this.data.tasks.forEach(task => {
            if (task.completed) statuses.completed++;
            else if (task.status === 'in-progress') statuses['in-progress']++;
            else statuses.todo++; // Default to 'todo' if not 'in-progress' and not completed
        });

        const totalForChart = this.data.tasks.length || 1; // Avoid division by zero for percentages
        const barColors = { todo: '#ffc107', 'in-progress': '#0dcaf0', completed: '#198754' };
        const statusTranslations = { // Add translations for chart tooltips/labels if needed
            todo: this.t('todo') || 'Todo',
            'in-progress': this.t('in_progress') || 'In Progress',
            completed: this.t('completed') || 'Completed'
        };


        for (const status in statuses) {
            const count = statuses[status];
            const percentage = (count / totalForChart) * 100;

            const barWrapper = document.createElement('div');
            barWrapper.style.display = 'flex';
            barWrapper.style.flexDirection = 'column';
            barWrapper.style.alignItems = 'center';
            barWrapper.style.width = '30%';
            barWrapper.style.height = '100%'; // Wrapper takes full height for alignment
            barWrapper.style.position = 'relative'; // For text positioning

            const bar = document.createElement('div');
            bar.style.width = '100%';
            bar.style.height = percentage + '%';
            bar.style.backgroundColor = barColors[status];
            bar.style.borderRadius = '4px 4px 0 0'; // Rounded top corners
            bar.title = `${statusTranslations[status]}: ${count}`;

            const barLabel = document.createElement('div');
            barLabel.textContent = `${statusTranslations[status]} (${Math.round(percentage)}%)`;
            barLabel.style.fontSize = '10px';
            barLabel.style.marginTop = '4px';
            barLabel.style.textAlign = 'center';
            barLabel.style.color = 'var(--color-text-secondary)';

            barWrapper.appendChild(bar);
            barWrapper.appendChild(barLabel);
            chartContainer.appendChild(barWrapper);
        }
        this.applyTranslations(); // Re-apply for any new elements
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

        // Recurrence elements
        const taskRecurrenceTypeEl = document.getElementById('taskRecurrenceType');
        const taskRecurrenceIntervalEl = document.getElementById('taskRecurrenceInterval');
        const recurrenceIntervalGroupEl = document.getElementById('recurrenceIntervalGroup');
        const taskReminderDateEl = document.getElementById('taskReminderDate');


        if (task) {
            title.textContent = this.t('task_modal_title');
            document.getElementById('taskTitle').value = task.title || '';
            document.getElementById('taskDescription').value = task.description || '';
            document.getElementById('taskPriority').value = task.priority || 'medium';
            document.getElementById('taskDueDate').value = task.dueDate || '';
            document.getElementById('taskTags').value = task.tags ? task.tags.join(', ') : '';
            document.getElementById('taskSubtasks').value = task.subtasks ? task.subtasks.map(st => st.title).join('\n') : '';

            // Populate recurrence fields
            if (task.recurrence) {
                taskRecurrenceTypeEl.value = task.recurrence.type || 'none';
                taskRecurrenceIntervalEl.value = task.recurrence.interval || 1;
            } else {
                taskRecurrenceTypeEl.value = 'none';
                taskRecurrenceIntervalEl.value = 1;
            }

            // Populate reminder field
            taskReminderDateEl.value = task.reminderDate ? task.reminderDate.slice(0, 16) : ''; // Format for datetime-local

        } else {
            title.textContent = this.t('cmd_new_task');
            form.reset();
            document.getElementById('taskSubtasks').value = '';
            taskRecurrenceTypeEl.value = 'none';
            taskRecurrenceIntervalEl.value = 1;
            taskReminderDateEl.value = ''; // Clear reminder for new task
        }

        // Show/hide interval group based on recurrence type
        recurrenceIntervalGroupEl.style.display = taskRecurrenceTypeEl.value === 'none' ? 'none' : 'block';

        // Event listener for recurrence type change
        // Remove old listener to prevent duplicates if modal is reshown
        taskRecurrenceTypeEl.removeEventListener('change', this.handleRecurrenceTypeChange);
        taskRecurrenceTypeEl.addEventListener('change', this.handleRecurrenceTypeChange.bind(this));


        modal.classList.add('active');
    }

    handleRecurrenceTypeChange() {
        const taskRecurrenceTypeEl = document.getElementById('taskRecurrenceType');
        const recurrenceIntervalGroupEl = document.getElementById('recurrenceIntervalGroup');
        if (taskRecurrenceTypeEl.value === 'none') {
            recurrenceIntervalGroupEl.style.display = 'none';
        } else {
            recurrenceIntervalGroupEl.style.display = 'block';
        }
    }


    hideTaskModal() {
        const modal = document.getElementById('taskModal');
        modal.classList.remove('active');
        this.editingTask = null;
    }

    saveTask() {
        const title = document.getElementById('taskTitle').value.trim();
        if (!title) return;

        const recurrenceType = document.getElementById('taskRecurrenceType').value;
        const recurrenceInterval = parseInt(document.getElementById('taskRecurrenceInterval').value, 10) || 1;
        const reminderDateValue = document.getElementById('taskReminderDate').value;

        const taskData = {
            title: title,
            description: document.getElementById('taskDescription').value.trim(),
            priority: document.getElementById('taskPriority').value,
            dueDate: document.getElementById('taskDueDate').value || null,
            tags: document.getElementById('taskTags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
            subtasks: document.getElementById('taskSubtasks').value.split('\n').map(t => t.trim()).filter(t => t).map(t => ({ id: `sub-${Date.now()}-${Math.random().toString(36).slice(2,5)}`, title: t, completed: false })),
            completed: false, // Default for new/edited tasks unless status says otherwise
            status: this.editingTask ? this.editingTask.status : 'todo', // Preserve status if editing
            recurrence: {
                type: recurrenceType,
                interval: recurrenceInterval
            },
            reminderDate: reminderDateValue ? new Date(reminderDateValue).toISOString() : null
        };

        if (taskData.status === 'completed') {
            taskData.completed = true;
        }

        // If reminder has changed or is newly set, reset reminderShown
        if (this.editingTask) {
            if (this.editingTask.reminderDate !== taskData.reminderDate) {
                this.editingTask.reminderShown = false;
            }
            Object.assign(this.editingTask, taskData);
        } else {
            // For new tasks, if reminderDate is set, reminderShown should be false
            taskData.reminderShown = false;
            const newTask = {
                id: `task-${Date.now()}`,
                ...taskData,
                createdAt: new Date().toISOString(),
                timeSpent: 0
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

    updateTaskStatus(taskId, status) {
        const task = this.data.tasks.find(t => t.id === taskId);
        if (task) {
            task.status = status;
            task.completed = status === 'completed';
            this.saveData();
            this.renderCurrentView();
        }
    }

    // View Renderers
    renderTableView() {
        const tbody = document.getElementById('tasksTableBody');
        const tasks = this.getFilteredTasks();
        
        tbody.innerHTML = tasks.map(task => {
            const recurrenceIndicator = task.recurrence && task.recurrence.type !== 'none' ? ' 🔄' : '';
            return `
            <tr>
                <td>
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                           onchange="app.toggleTaskComplete('${task.id}')">
                </td>
                <td>
                    <div class="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}${recurrenceIndicator}</div>
                    ${task.description ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${task.description}</div>` : ''}
                    ${task.subtasks && task.subtasks.length > 0 ? `<ul class="subtask-list">${task.subtasks.map(st => `<li>${st.title}</li>`).join('')}</ul>` : ''}
                </td>
                <td>
                    <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                </td>
                <td>${task.dueDate ? new Date(task.dueDate).toLocaleDateString('ja-JP') : '-'}</td>
                <td>
                    ${task.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </td>
                <td id="timeSpent-${task.id}">${this.formatDuration(task.timeSpent || 0)}</td>
                <td>
                    <button class="btn btn--sm btn--outline" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">編集</button>
                    <button class="btn btn--sm btn--outline" id="track-btn-${task.id}" onclick="app.toggleTaskTimer('${task.id}')" style="margin-left: 8px;">${this.taskTimer.taskId === task.id ? this.t('stop_tracking') : this.t('start_tracking')}</button>
                    <button class="btn btn--sm btn--outline" onclick="app.deleteTask('${task.id}')" style="margin-left: 8px; color: var(--color-error);">削除</button>
                </td>
            </tr>
        `}).join('');
    }

    renderKanbanView() {
        const todoTasks = this.data.tasks.filter(task => task.status === 'todo');
        const inProgressTasks = this.data.tasks.filter(task => task.status === 'in-progress');
        const completedTasks = this.data.tasks.filter(task => task.status === 'completed');

        document.getElementById('todoTasks').innerHTML = todoTasks.map(task => this.renderKanbanTask(task)).join('');
        document.getElementById('inProgressTasks').innerHTML = inProgressTasks.map(task => this.renderKanbanTask(task)).join('');
        document.getElementById('completedTasks').innerHTML = completedTasks.map(task => this.renderKanbanTask(task)).join('');
        this.addKanbanDragEvents();
    }

    renderKanbanTask(task) {
        const recurrenceIndicator = task.recurrence && task.recurrence.type !== 'none' ? ' 🔄' : '';
        return `
            <div class="kanban-task" draggable="true" data-id="${task.id}" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">
                <div style="font-weight: 500; margin-bottom: 8px;">${task.title}${recurrenceIndicator}</div>
                ${task.description ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-bottom: 8px;">${task.description}</div>` : ''}
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                    ${task.dueDate ? `<span style="font-size: 11px; color: var(--color-text-secondary);">${new Date(task.dueDate).toLocaleDateString('ja-JP')}</span>` : ''}
                </div>
            </div>
        `;
    }

    addKanbanDragEvents() {
        document.querySelectorAll('.kanban-task').forEach(taskEl => {
            taskEl.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', taskEl.dataset.id);
            });
        });

        document.querySelectorAll('.kanban-tasks').forEach(col => {
            col.addEventListener('dragover', (e) => {
                e.preventDefault();
                col.classList.add('drag-over');
            });
            col.addEventListener('dragleave', () => col.classList.remove('drag-over'));
            col.addEventListener('drop', (e) => {
                e.preventDefault();
                const taskId = e.dataTransfer.getData('text/plain');
                const status = col.dataset.status;
                this.updateTaskStatus(taskId, status);
                col.classList.remove('drag-over');
            });
        });
    }

    renderListView() {
        const list = document.getElementById('tasksList');
        const tasks = this.getFilteredTasks();
        
        list.innerHTML = tasks.map(task => {
            const recurrenceIndicator = task.recurrence && task.recurrence.type !== 'none' ? ' 🔄' : '';
            return `
            <div class="task-item" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">
                <input type="checkbox" class="task-item__check" ${task.completed ? 'checked' : ''}
                       onclick="event.stopPropagation(); app.toggleTaskComplete('${task.id}')">
                <div class="task-item__content">
                    <div class="task-item__title" style="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}${recurrenceIndicator}</div>
                    <div class="task-item__meta">
                        <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                        ${task.dueDate ? `<span>期限: ${new Date(task.dueDate).toLocaleDateString('ja-JP')}</span>` : ''}
                        ${task.tags.length > 0 ? `<span>${task.tags.map(tag => `#${tag}`).join(' ')}</span>` : ''}
                        <span id="timeSpent-${task.id}">${this.formatDuration(task.timeSpent || 0)}</span>
                    </div>
                    ${task.subtasks && task.subtasks.length > 0 ? `<ul class="subtask-list">${task.subtasks.map(st => `<li>${st.title}</li>`).join('')}</ul>` : ''}
                    <button class="btn btn--sm btn--outline" id="track-btn-${task.id}" onclick="event.stopPropagation(); app.toggleTaskTimer('${task.id}')" style="margin-top:4px;">${this.taskTimer.taskId === task.id ? this.t('stop_tracking') : this.t('start_tracking')}</button>
                </div>
            </div>
        `}).join('');
    }

    renderCalendarView() {
        const now = new Date();
        const year = this.calendarDate.getFullYear();
        const month = this.calendarDate.getMonth();
        
        document.getElementById('calendarMonth').textContent = `${year}年${month + 1}月`;
        
        const firstDay = new Date(year, month, 1);
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

    renderSettingsView() {
        document.getElementById('usernameInput').value = this.data.settings.username || '';
        document.getElementById('languageSelect').value = this.data.settings.language || 'ja';
        document.getElementById('themeSelect').value = this.data.settings.theme || 'light';
        document.getElementById('clearDesignSelect').value = this.data.settings.clearDesignEnabled ? 'true' : 'false';
    }

    renderChangelogView() {
        // nothing dynamic for now
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
            case 'high': return this.t('priority_high');
            case 'medium': return this.t('priority_medium');
            case 'low': return this.t('priority_low');
            default: return this.t('priority_medium');
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
            this.timer.currentTime = (this.timer.customDuration || 25) * 60;
        }
        
        this.updateTimer();
        document.getElementById('startTimer').textContent = '開始';
    }

    changeTimerType() {
        const type = document.getElementById('timerType').value;
        this.timer.type = type;
        const input = document.getElementById('customTimerInput');
        input.style.display = type === 'custom' ? 'block' : 'none';
        if (type === 'custom') {
            input.value = this.timer.customDuration;
        }
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

    // Task Time Tracking
    formatDuration(sec) {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }

    toggleTaskTimer(taskId) {
        if (this.taskTimer.taskId === taskId) {
            this.stopTaskTimer();
        } else {
            this.startTaskTimer(taskId);
        }
    }

    startTaskTimer(taskId) {
        this.stopTaskTimer();
        this.taskTimer.taskId = taskId;
        this.taskTimer.interval = setInterval(() => {
            const task = this.data.tasks.find(t => t.id === taskId);
            if (task) {
                task.timeSpent = (task.timeSpent || 0) + 1;
                const el = document.getElementById(`timeSpent-${task.id}`);
                if (el) el.textContent = this.formatDuration(task.timeSpent);
            }
        }, 1000);
        const btn = document.getElementById(`track-btn-${taskId}`);
        if (btn) btn.textContent = this.t('stop_tracking');
    }

    stopTaskTimer() {
        if (this.taskTimer.interval) {
            clearInterval(this.taskTimer.interval);
        }
        if (this.taskTimer.taskId) {
            const btn = document.getElementById(`track-btn-${this.taskTimer.taskId}`);
            if (btn) btn.textContent = this.t('start_tracking');
        }
        this.taskTimer.taskId = null;
        this.taskTimer.interval = null;
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
            (task.description && task.description.toLowerCase().includes(query)) || // Check if description exists
            (task.tags && task.tags.some(tag => tag.toLowerCase().includes(query))) // Check if tags exist
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
        tbody.innerHTML = tasks.map(task => {
            const recurrenceIndicator = task.recurrence && task.recurrence.type !== 'none' ? ' 🔄' : '';
            return `
            <tr>
                <td>
                    <input type="checkbox" ${task.completed ? 'checked' : ''} 
                           onchange="app.toggleTaskComplete('${task.id}')">
                </td>
                <td>
                    <div class="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}${recurrenceIndicator}</div>
                    ${task.description ? `<div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">${task.description}</div>` : ''}
                </td>
                <td>
                    <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                </td>
                <td>${task.dueDate ? new Date(task.dueDate).toLocaleDateString('ja-JP') : '-'}</td>
                <td>
                    ${task.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </td>
                <td id="timeSpent-${task.id}">${this.formatDuration(task.timeSpent || 0)}</td>
                <td>
                    <button class="btn btn--sm btn--outline" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">編集</button>
                    <button class="btn btn--sm btn--outline" id="track-btn-${task.id}" onclick="app.toggleTaskTimer('${task.id}')" style="margin-left: 8px;">${this.taskTimer.taskId === task.id ? this.t('stop_tracking') : this.t('start_tracking')}</button>
                    <button class="btn btn--sm btn--outline" onclick="app.deleteTask('${task.id}')" style="margin-left: 8px; color: var(--color-error);">削除</button>
                </td>
            </tr>
        `}).join('');
    }

    renderFilteredListView(tasks) {
        const list = document.getElementById('tasksList');
        list.innerHTML = tasks.map(task => {
            const recurrenceIndicator = task.recurrence && task.recurrence.type !== 'none' ? ' 🔄' : '';
            return `
            <div class="task-item" onclick="app.showTaskModal(app.data.tasks.find(t => t.id === '${task.id}'))">
                <input type="checkbox" class="task-item__check" ${task.completed ? 'checked' : ''}
                       onclick="event.stopPropagation(); app.toggleTaskComplete('${task.id}')">
                <div class="task-item__content">
                    <div class="task-item__title" style="${task.completed ? 'text-decoration: line-through; opacity: 0.6;' : ''}">${task.title}${recurrenceIndicator}</div>
                    <div class="task-item__meta">
                        <span class="priority-badge priority-badge--${task.priority}">${this.getPriorityText(task.priority)}</span>
                        ${task.dueDate ? `<span>期限: ${new Date(task.dueDate).toLocaleDateString('ja-JP')}</span>` : ''}
                        ${task.tags.length > 0 ? `<span>${task.tags.map(tag => `#${tag}`).join(' ')}</span>` : ''}
                        <span id="timeSpent-${task.id}">${this.formatDuration(task.timeSpent || 0)}</span>
                    </div>
                    <button class="btn btn--sm btn--outline" id="track-btn-${task.id}" onclick="event.stopPropagation(); app.toggleTaskTimer('${task.id}')" style="margin-top:4px;">${this.taskTimer.taskId === task.id ? this.t('stop_tracking') : this.t('start_tracking')}</button>
                </div>
            </div>
        `}).join('');
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
            case 'import':
                document.getElementById('importInput').click();
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

    importData(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                if (parsed.pages && parsed.tasks) {
                    this.data.pages = parsed.pages;
                    this.data.tasks = parsed.tasks;
                     // Ensure all imported tasks have a recurrence field
                    this.data.tasks.forEach(task => {
                        if (!task.recurrence) {
                            task.recurrence = { type: 'none', interval: 1 };
                        }
                    });
                    this.data.settings = parsed.settings || this.data.settings;
                    this.saveData();
                    this.renderPagesList();
                    this.renderCurrentView();
                    alert('データをインポートしました');
                } else {
                    alert('無効なデータ形式です');
                }
            } catch (err) {
                alert('インポートに失敗しました');
            }
        };
        reader.readAsText(file);
    }

    // Initialize app
    async start() {
        // Request notification permission
        if ('Notification' in window && Notification.permission === 'default') {
            await Notification.requestPermission();
        }
        
        this.renderPagesList();
        this.switchView('editor');
        this.changeTimerType();

        // Request notification permission
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }

        // Check reminders periodically and once on load
        this.checkReminders(); // Initial check
        setInterval(this.checkReminders.bind(this), 60000); // Check every minute
    }

    showNotification(title, body) {
        if (!('Notification' in window)) {
            console.warn('This browser does not support desktop notification');
            return;
        }

        if (Notification.permission === 'granted') {
            new Notification(title, { body: body, icon: './favicon.ico' }); // Assuming favicon is in root
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification(title, { body: body, icon: './favicon.ico' });
                }
            });
        }
    }

    checkReminders() {
        const now = new Date();
        this.data.tasks.forEach(task => {
            if (!task.completed && task.reminderDate && !task.reminderShown) {
                const reminderDateTime = new Date(task.reminderDate);
                if (reminderDateTime <= now) {
                    const body = this.t('reminder_triggered_body').replace('%taskName%', task.title);
                    this.showNotification(this.t('reminder_triggered_title'), body);
                    task.reminderShown = true;
                    // Potentially call saveData here if you want reminderShown to persist immediately
                    // this.saveData();
                }
            }
        });
        // If reminderShown was changed for any task and needs to be persisted without waiting for other saves:
        if (this.data.tasks.some(t => t.reminderShown === true && !localStorage.getItem('nexia_data').includes(`"id":"${t.id}","reminderShown":true`))) {
             this.saveData(); // Save if any reminderShown was just updated and not yet persisted
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new NexiaApp();
    // app.start(); // start is async, ensure it's handled if needed. For now, direct call is fine.
    app.start();
});