package com.hacksociety.service.dto;

import java.util.Map;

public class NasdaqDTO {
    private String ticker;
    private String imageUrl;
    private String name;

    private Map<String, Object> latestPerf;

    public NasdaqDTO() {
    }

    public NasdaqDTO(String ticker, String imageUrl, String name) {
        this.ticker = ticker;
        this.imageUrl = imageUrl;
        this.name = name;
    }

    public String getTicker() {
        return ticker;
    }

    public void setTicker(String ticker) {
        this.ticker = ticker;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, Object> getLatestPerf() {
        return latestPerf;
    }

    public void setLatestPerf(Map<String, Object> latestPerf) {
        this.latestPerf = latestPerf;
    }
}
