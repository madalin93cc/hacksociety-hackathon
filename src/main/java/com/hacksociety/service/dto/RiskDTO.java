package com.hacksociety.service.dto;

import java.util.List;

public class RiskDTO {
    private String country;
    private String currency;
    private String sector;
    private Double countryRisk;
    private Double riskMarket;
    private Double riskSector;
    private Double riskSpecific;
    private Double totalRisk;

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public Double getTotalRisk() {
        return totalRisk;
    }

    public void setTotalRisk(Double totalRisk) {
        this.totalRisk = totalRisk;
    }

    public Double getCountryRisk() {
        return countryRisk;
    }

    public void setCountryRisk(Double countryRisk) {
        this.countryRisk = countryRisk;
    }

    public Double getRiskMarket() {
        return riskMarket;
    }

    public void setRiskMarket(Double riskMarket) {
        this.riskMarket = riskMarket;
    }

    public Double getRiskSector() {
        return riskSector;
    }

    public void setRiskSector(Double riskSector) {
        this.riskSector = riskSector;
    }

    public Double getRiskSpecific() {
        return riskSpecific;
    }

    public void setRiskSpecific(Double riskSpecific) {
        this.riskSpecific = riskSpecific;
    }
}
