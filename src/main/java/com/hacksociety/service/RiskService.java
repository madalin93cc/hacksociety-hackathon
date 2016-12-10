package com.hacksociety.service;

import com.hacksociety.service.dto.NasdaqDTO;
import com.hacksociety.service.dto.RiskDTO;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by romeo on 10 Dec 2016.
 */
@Service
public class RiskService {
    private static Map<String, RiskDTO> cache = new HashMap<>();
    List<NasdaqDTO> nasdaqs;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private FundService fundService;

    public RiskDTO getRiskByCode(String code) {
        JSONObject jsonObject = null;

        if (cache.containsKey(code)) {
            return cache.get(code);
        }

        String str = restTemplate.getForObject("https://www.blackrock.com/tools/hackathon/portfolio-analysis?positions=" +
            code + "~100" +
            "&calculateRisk=true" +
            "&calculateExposures=true" +
            "&calculateExpectedReturns=true" +
            "&returnsType=MONTHLY", String.class);
        try {
            jsonObject = new JSONObject(str);
        } catch (Exception e) {
            e.printStackTrace();
        }
        JsonParser jsonParser = new JacksonJsonParser();
        Map<String, Object> json = jsonParser.parseMap(str);

        Map<String, Object> holdings = (Map) ((List) ((Map) ((List) ((Map) ((List) ((Map) json.get("resultMap")).get("PORTFOLIOS")).get(0)).get("portfolios")).get(0)).get("holdings")).get(0);
        Map<String, Object> riskData = (Map) holdings.get("riskData");
        RiskDTO riskDTO = new RiskDTO();

        if (holdings.get("country") != null)
            riskDTO.setCountry(holdings.get("country").toString());

        if (holdings.get("currency") != null)
            riskDTO.setCurrency(holdings.get("currency").toString());

        if (holdings.get("gics1Sector") != null)
            riskDTO.setSector(holdings.get("gics1Sector").toString());

        if (riskData != null) {
            riskDTO.setTotalRisk((Double) riskData.get("totalRisk"));
            Map<String, Object> riskFactorsMap = (Map) riskData.get("riskFactorsMap");
            riskDTO.setCountryRisk((Double) ((Map) riskFactorsMap.get("riskCountry")).get("contribution"));
            riskDTO.setRiskSector((Double) ((Map) riskFactorsMap.get("riskSector")).get("contribution"));
            riskDTO.setRiskSpecific((Double) ((Map) riskFactorsMap.get("riskSpecific")).get("contribution"));
            riskDTO.setRiskMarket((Double) ((Map) riskFactorsMap.get("riskMarket")).get("contribution"));
        }

        cache.put(code, riskDTO);

        return riskDTO;
    }
}
