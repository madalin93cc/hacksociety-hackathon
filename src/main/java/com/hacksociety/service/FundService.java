package com.hacksociety.service;

import com.hacksociety.domain.enums.NasdaqEnum;
import com.hacksociety.service.dto.FundTrendDTO;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.cloud.cloudfoundry.com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Madalin.Colezea on 12/9/2016.
 */
@Service
public class FundService {

    @Autowired
    RestTemplate restTemplate;

    public Map<String, Object> getPerformanceByCode(String code) {
        JSONObject jsonObject = null;
        String str = restTemplate.getForObject("https://www.blackrock.com/tools/hackathon/performance?identifiers=" + code, String.class);
        try {
            jsonObject = new JSONObject(str);
        } catch (Exception e) {
            e.printStackTrace();
        }
        JsonParser jsonParser = new JacksonJsonParser();
        Map<String, Object> json = jsonParser.parseMap(str);
        return (HashMap)json.get("resultMap");
    }

    public List<FundTrendDTO> getAllFundTrends() {
        List<FundTrendDTO> fundTrendDTOs = new ArrayList<>();
        for (NasdaqEnum nasdaqEnum: NasdaqEnum.values()) {
            FundTrendDTO fundTrendDTO = new FundTrendDTO();
            fundTrendDTO.setCode(nasdaqEnum.name());
            fundTrendDTO.setValue(getValueForCode(nasdaqEnum.name()));
        }
        return fundTrendDTOs;
    }

    private Float getValueForCode(String code) {
        return null;
    }
}
