(function() {
    'use strict';

    angular
        .module('hacksocietyApp')
        .factory('FundService', FundService);

    FundService.$inject = ['$http'];

    function FundService ($http) {
        var service = {
            getPerformance: getPerformance,
            getLatestPerformance: getLatestPerformance,
            getRisks: getRisks
            getCompanyDescription: getCompanyDescription,
        };

        return service;

        function getPerformance (ticker) {
            return $http.get('public/fund/performance/' + ticker);
        }

        function getRisks (ticker) {
            return $http.get('public/fund/risk/' + ticker);
        }

        function getLatestPerformance (ticker) {
            return $http.get('public/fund/performance/latest/' + ticker);
        }

        function getCompanyDescription(ticker) {
            var wiki_mapping = {
                PYPL: {
                    html: '<p><b>PayPal Holdings, Inc.</b> is an American company operating a worldwide online payments system that supports <a href="/wiki/Online_money_transfers" class="mw-redirect" title="Online money transfers">online money transfers</a> and serves as an electronic alternative to traditional paper methods like <a href="/wiki/Cheque" title="Cheque">checks</a> and <a href="/wiki/Money_order" title="Money order">money orders</a>. PayPal is one of the world\'s largest Internet payment companies.<sup id="cite_ref-forbeslede_6-0" class="reference"><a href="#cite_note-forbeslede-6">[6]</a></sup> The company operates as a payment processor for online vendors, <a href="/wiki/Auction" title="Auction">auction</a> sites and other commercial users, for which it charges a fee.</p>',
                    link: 'https://en.wikipedia.org/wiki/PayPal'
                },
                AAPL: {
                    html: '<p><b>Apple</b> is an American <a href="/wiki/Multinational_corporation" title="Multinational corporation">multinational</a> <a href="/wiki/Technology_company" title="Technology company">technology company</a> headquartered in <a href="/wiki/Cupertino,_California" title="Cupertino, California">Cupertino</a>, <a href="/wiki/California" title="California">California</a>, that designs, develops, and sells <a href="/wiki/Consumer_electronics" title="Consumer electronics">consumer electronics</a>, <a href="/wiki/Software" title="Software">computer software</a>, and online services. Its <a href="/wiki/Computer_hardware" title="Computer hardware">hardware</a> products include the <a href="/wiki/IPhone" title="IPhone">iPhone</a> <a href="/wiki/Smartphone" title="Smartphone">smartphone</a>, the <a href="/wiki/IPad" title="IPad">iPad</a> <a href="/wiki/Tablet_computer" title="Tablet computer">tablet computer</a>, the <a href="/wiki/Macintosh" title="Macintosh">Mac</a> <a href="/wiki/Personal_computer" title="Personal computer">personal computer</a>, the <a href="/wiki/IPod" title="IPod">iPod</a> <a href="/wiki/Portable_media_player" title="Portable media player">portable media player</a>, the <a href="/wiki/Apple_Watch" title="Apple Watch">Apple Watch</a> <a href="/wiki/Smartwatch" title="Smartwatch">smartwatch</a>, and the <a href="/wiki/Apple_TV" title="Apple TV">Apple TV</a> <a href="/wiki/Digital_media_player" title="Digital media player">digital media player</a>. Apple\'s consumer software includes the <a href="/wiki/MacOS" title="MacOS">macOS</a> and <a href="/wiki/IOS" title="IOS">iOS</a> <a href="/wiki/Operating_system" title="Operating system">operating systems</a>, the <a href="/wiki/ITunes" title="ITunes">iTunes</a> <a href="/wiki/Media_player_(software)" title="Media player (software)">media player</a>, the <a href="/wiki/Safari_(web_browser)" title="Safari (web browser)">Safari</a> <a href="/wiki/Web_browser" title="Web browser">web browser</a>, and the <a href="/wiki/ILife" title="ILife">iLife</a> and <a href="/wiki/IWork" title="IWork">iWork</a> creativity and productivity suites. Its online services include the <a href="/wiki/ITunes_Store" title="ITunes Store">iTunes Store</a>, the <a href="/wiki/App_Store_(iOS)" title="App Store (iOS)">iOS App Store</a> and <a href="/wiki/Mac_App_Store" title="Mac App Store">Mac App Store</a>, <a href="/wiki/Apple_Music" title="Apple Music">Apple Music</a>, and <a href="/wiki/ICloud" title="ICloud">iCloud</a>.</p>',
                    link: 'https://en.wikipedia.org/wiki/Apple_Inc.'
                },
                GOOG: {
                    html: '<p><b>Google</b> is an American <a href="/wiki/Multinational_corporation" title="Multinational corporation">multinational</a> <a href="/wiki/Technology_company" title="Technology company">technology company</a> specializing in <a href="/wiki/Internet" title="Internet">Internet</a>-related services and products that include <a href="/wiki/Online_advertising" title="Online advertising">online advertising</a> technologies, <a href="/wiki/Web_search_engine" title="Web search engine">search</a>, <a href="/wiki/Cloud_computing" title="Cloud computing">cloud computing</a>, <a href="/wiki/Software" title="Software">software</a>, and <a href="/wiki/Computer_hardware" title="Computer hardware">hardware</a>.</p>',
                    link: 'https://en.wikipedia.org/wiki/Google',
                },
                SBUX: {
                    html: '<p><b>Starbucks Corporation</b> is an American <a href="/wiki/Coffee" title="Coffee">coffee</a> company and <a href="/wiki/List_of_coffeehouse_chains" title="List of coffeehouse chains">coffeehouse chain</a>. Starbucks was founded in <a href="/wiki/Seattle" title="Seattle">Seattle</a>, Washington in 1971. As of November 2016 it operates 23,768 locations worldwide, including 13,107 (+170) in the United States, 2,204 (+86) in China, 1,418 (-12) in Canada, 1,160 (+2) in Japan and 872 in South Korea (bumping United Kingdom from 5th place) (Differences reflect growth since Jan 8, 2016).<sup id="cite_ref-loxcel_1-1" class="reference"><a href="#cite_note-loxcel-1">[1]</a></sup><sup id="cite_ref-Profile2014-10_4-0" class="reference"><a href="#cite_note-Profile2014-10-4">[4]</a></sup></p>',
                    link: 'https://en.wikipedia.org/wiki/Starbucks'
                },
                V: {
                    hmtl: '<p><b>Visa Inc.</b> (also known as <b>Visa</b>, stylized as <i><b>VISA</b></i>) is an American <a href="/wiki/Multinational_corporation" title="Multinational corporation">multinational</a> <a href="/wiki/Financial_services" title="Financial services">financial services</a> corporation headquartered in <a href="/wiki/Foster_City,_California" title="Foster City, California">Foster City</a>, <a href="/wiki/California" title="California">California</a>, United States.<sup id="cite_ref-3" class="reference"><a href="#cite_note-3">[3]</a></sup> It facilitates <a href="/wiki/Electronic_funds_transfer" title="Electronic funds transfer">electronic funds transfers</a> throughout the world, most commonly through Visa-branded <a href="/wiki/Credit_cards" class="mw-redirect" title="Credit cards">credit cards</a> and <a href="/wiki/Debit_card" title="Debit card">debit cards</a>.<sup id="cite_ref-4" class="reference"><a href="#cite_note-4">[4]</a></sup> Visa does not issue cards, extend credit or set rates and fees for consumers; rather, Visa provides financial institutions with Visa-branded payment products that they then use to offer credit, debit, prepaid and cash-access programs to their customers. In 2015, the Nilson Report, a publication that tracks the credit card industry, found that Visa’s global network (known as VisaNet) processed 100&nbsp;billion transactions with a total volume of US$6.8&nbsp;trillion.</p>',
                    link: 'https://en.wikipedia.org/wiki/Visa_Inc.'
                },
                MSFT: {
                    html: '<p><b>Microsoft Corporation</b> (commonly referred to as <b>Microsoft</b> or <b>MS</b>) is an American <a href="/wiki/Multinational_corporation" title="Multinational corporation">multinational</a> <a href="/wiki/Technology_company" title="Technology company">technology company</a> headquartered in <a href="/wiki/Redmond,_Washington" title="Redmond, Washington">Redmond, Washington</a>, that develops, manufactures, licenses, supports and sells <a href="/wiki/Computer_software" class="mw-redirect" title="Computer software">computer software</a>, <a href="/wiki/Consumer_electronics" title="Consumer electronics">consumer electronics</a> and <a href="/wiki/Personal_computers" class="mw-redirect" title="Personal computers">personal computers</a> and services. Its best known software products are the <a href="/wiki/Microsoft_Windows" title="Microsoft Windows">Microsoft Windows</a> line of <a href="/wiki/Operating_systems" class="mw-redirect" title="Operating systems">operating systems</a>, <a href="/wiki/Microsoft_Office" title="Microsoft Office">Microsoft Office</a> <a href="/wiki/Office_suite" class="mw-redirect" title="Office suite">office suite</a>, and <a href="/wiki/Internet_Explorer" title="Internet Explorer">Internet Explorer</a> and <a href="/wiki/Microsoft_Edge" title="Microsoft Edge">Edge</a> <a href="/wiki/Web_browser" title="Web browser">web browsers</a>. Its flagship hardware products are the <a href="/wiki/Xbox" title="Xbox">Xbox</a> <a href="/wiki/Video_game_console" title="Video game console">video game consoles</a> and the <a href="/wiki/Microsoft_Surface" title="Microsoft Surface">Microsoft Surface</a> tablet lineup. As of 2011, it was the <a href="/wiki/List_of_the_largest_software_companies" title="List of the largest software companies">world\'s largest software maker</a> by revenue,<sup id="cite_ref-8" class="reference"><a href="#cite_note-8">[8]</a></sup> and one of the <a href="/wiki/List_of_corporations_by_market_capitalization" class="mw-redirect" title="List of corporations by market capitalization">world\'s most valuable companies</a>.<sup id="cite_ref-9" class="reference"><a href="#cite_note-9">[9]</a></sup></p>',
                    link: 'https://en.wikipedia.org/wiki/Microsoft'
                }
            };
            return wiki_mapping[ticker];
        }
    }
})();
