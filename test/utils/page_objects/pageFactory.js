const HomePage = require("./home_page/home_page");
const SearchResultsPage = require("./search_results_page/search_results_page");
const AbstractPage = require("./abstract_page/abstract_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "Search Results Page":
                return new SearchResultsPage();
            default:
                return new AbstractPage();        
        };
    };
};

module.exports = PageFactory;
