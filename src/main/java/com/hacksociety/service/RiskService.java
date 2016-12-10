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

        riskDTO.setCountry(holdings.get("country").toString());
        riskDTO.setCurrency(holdings.get("currency").toString());
        riskDTO.setSector(holdings.get("gics1Sector").toString());
        riskDTO.setTotalRisk((Double) riskData.get("totalRisk"));
        riskDTO.setCountryRisk((Double) riskData.get("riskCountry"));
        riskDTO.setRiskSector((Double) riskData.get("riskSector"));
        riskDTO.setRiskSpecific((Double) riskData.get("riskSpecific"));

        cache.put(code, riskDTO);

        return riskDTO;
    }
}
