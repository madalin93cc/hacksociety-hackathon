package com.hacksociety.service.dto;

public class NasdaqDTO {
    private String ticker;
    private String imageUrl;

    public NasdaqDTO() {
    }

    public NasdaqDTO(String ticker, String imageUrl) {
        this.ticker = ticker;
        this.imageUrl = imageUrl;
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
}
