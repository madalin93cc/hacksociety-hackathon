package com.hacksociety.web.rest;

import com.hacksociety.service.RiskService;
import com.hacksociety.service.dto.RiskDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/public")
public class RiskResource {
    @Autowired
    RiskService riskService;

    @RequestMapping(value = "/fund/risk/{code}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public RiskDTO getPerformanceByCode(@PathVariable String code) {
        return riskService.getRiskByCode(code);
    }
}
