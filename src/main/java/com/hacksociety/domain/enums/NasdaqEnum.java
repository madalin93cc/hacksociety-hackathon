package com.hacksociety.domain.enums;

import java.io.Serializable;

public enum NasdaqEnum implements Serializable {
    AAPL("AAPL", "http://diylogodesigns.com/blog/wp-content/uploads/2016/04/Apple-Logo-black-png-transparent.png", "Apple Inc.", "apple"),
    GOOG("GOOG", "http://diylogodesigns.com/blog/wp-content/uploads/2016/04/new-google-logo-png.png", "Google Inc.", "google"),
    MSFT("MSFT", "http://diylogodesigns.com/blog/wp-content/uploads/2016/04/Microsoft-Logo-PNG.png", "Microsoft Corp.", "microsoft"),
    PYPL("PYPL", "http://logok.org/wp-content/uploads/2014/05/PayPal-logo-20071.png", "PayPal", "paypal"),
    SBUX("SBUX", "https://t4.rbxcdn.com/3e67c0d5df21a6ea4d9c8623c1c731e8", "Starbucks Corp.", "starbucks"),
    V("V", "http://www.pngpix.com/wp-content/uploads/2016/07/PNGPIX-COM-Visa-Logo-PNG-Transparent.png", "Visa Inc.", "visa");

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
