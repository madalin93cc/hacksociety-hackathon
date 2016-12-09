package com.hacksociety.service.dto;

/**
 * Created by Madalin.Colezea on 12/9/2016.
 */
public class FundTrendDTO {
    private String code;
    private Double value;
    private String name;
    private String host;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public FundTrendDTO(String code, Double value, String name, String host) {
        this.code = code;
        this.value = value;
        this.name = name;
        this.host = host;
    }

    public FundTrendDTO() {
    }
}
