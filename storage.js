const STORAGE_KEYS = Object.freeze({
    SITE_CONFIG: 'horus_site_config',
    COURSES: 'horus_courses',
    QUESTIONS: 'horus_questions',
    CONTACT: 'horus_contact',
    TESTIMONIALS: 'horus_testimonials'
});

window.STORAGE_KEYS = STORAGE_KEYS;

const StorageService = {
    getData: function(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            if (item === null || item === undefined) {
                return defaultValue;
            }
            return JSON.parse(item);
        } catch (e) {
            console.error(`Error reading ${key} from storage:`, e);
            return defaultValue;
        }
    },

    saveData: function(key, payload) {
        try {
            localStorage.setItem(key, JSON.stringify(payload));
            return true;
        } catch (e) {
            console.error(`Error saving ${key} to storage:`, e);
            return false;
        }
    },

    removeData: function(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (e) {
            console.error(`Error removing ${key} from storage:`, e);
            return false;
        }
    }
};

window.StorageService = StorageService;

