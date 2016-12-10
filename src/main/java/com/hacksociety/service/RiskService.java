package com.hacksociety.service;

import com.hacksociety.service.dto.NasdaqDTO;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JacksonJsonParser;
import org.springframework.boot.json.JsonParser;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.xml.ws.ServiceMode;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by romeo on 10 Dec 2016.
 */
@Service
public class RiskService {
    private static Map<String, Map<String, Object>> cache = new HashMap<>();
    List<NasdaqDTO> nasdaqs;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private FundService fundService;

    public Map<String, Object> getPerformanceByCode(String code) {
        JSONObject jsonObject = null;

        if (cache.containsKey(code)) {
            return cache.get(code);
        }

        String str = restTemplate.getForObject("https://www.blackrock.com/tools/hackathon/portfolio-analysis?positions=" +
            code + "~100&calculateRisk=true", String.class);
        try {
            jsonObject = new JSONObject(str);
        } catch (Exception e) {
            e.printStackTrace();
        }
        JsonParser jsonParser = new JacksonJsonParser();
        Map<String, Object> json = jsonParser.parseMap(str);
        cache.put(code, json);

        return (Map<String, Object>) json.get("resultMap");
    }
}
