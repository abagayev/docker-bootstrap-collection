import cookies from "browser-cookies";

global.myApp = {
    // get last visit date from cookies
    getLastVisit: () => {
        const last_visit = cookies.get("last_visit");

        return last_visit;
    },

    // set last visit value
    setLastVisit: (value) => {
        cookies.set("last_visit", value || (new Date()).toISOString(), {
            expires: 365
        });
    }
};
