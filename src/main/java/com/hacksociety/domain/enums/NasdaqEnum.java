package com.hacksociety.domain.enums;

import java.io.Serializable;

public enum NasdaqEnum implements Serializable {
    AAPL("AAPL", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png", "Apple", "apple"),
    GOOG("GOOG", "https://lh3.googleusercontent.com/-qn7Hl_AXEOA/Vegu58jvBrI/AAAAAAAAAVA/RtkSABWWZsU/w768-h768/Google_icon_2015.png", "Google", "google"),
    MSFT("MSFT", "https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0", "Microsoft", "microsoft");

    private String ticker;
    private String url;
    private String name;
    private String host;

    NasdaqEnum(String ticker, String url, String name, String host) {
        this.ticker = ticker;
        this.url = url;
        this.name = name;
        this.host = host;
    }

    public String getTicker() {
        return ticker;
    }

    public String getUrl() {
        return url;
    }

    public String getName() {
        return name;
    }

    public String getHost() {
        return host;
    }
}
