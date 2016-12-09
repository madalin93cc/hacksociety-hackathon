package com.hacksociety.domain.enums;

import java.io.Serializable;

public enum NasdaqEnum implements Serializable {
    AAPL("AAPL", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png"),
    GOOG("GOOG", "https://yt3.ggpht.com/-v0soe-ievYE/AAAAAAAAAAI/AAAAAAAAAAA/OixOH_h84Po/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"),
    MSFT("MSFT", "https://c.s-microsoft.com/en-us/CMSImages/lrn-share-site-ms-logo.png?version=bf62922f-fda3-d328-e220-b699eac0d6c0");

    private String ticker;
    private String url;

    NasdaqEnum(String ticker, String url) {
        this.ticker = ticker;
        this.url = url;
    }

    public String getTicker() {
        return ticker;
    }

    public String getUrl() {
        return url;
    }
}
