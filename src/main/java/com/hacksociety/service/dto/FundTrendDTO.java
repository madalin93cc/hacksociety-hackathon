package com.hacksociety.service.dto;

/**
 * Created by Madalin.Colezea on 12/9/2016.
 */
public class FundTrendDTO {
    private String code;
    private Double value;

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

    public FundTrendDTO(String code, Double value) {
        this.code = code;
        this.value = value;
    }

    public FundTrendDTO() {
    }
}
