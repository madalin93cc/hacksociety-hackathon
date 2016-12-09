package com.hacksociety.web.rest;

import com.hacksociety.service.FundService;
import com.hacksociety.service.dto.FundTrendDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

/**
 * Created by Madalin.Colezea on 12/9/2016.
 */
@RestController
@RequestMapping("/public")
public class FundResource {

    @Autowired
    private FundService fundService;

    @RequestMapping(value = "/fund/performance/{code}", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    public Map<String, Object> getPerformanceByCode(@PathVariable String code) {
        return fundService.getPerformanceByCode(code);
    }

    @RequestMapping(value = "/fund/all/latestPerf", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<FundTrendDTO> getAllFundTrends() {
        return fundService.getAllFromCache();
    }

    @RequestMapping(value = "/fund/all/latestPerf/{code}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public FundTrendDTO getFundTrendsByCode(@PathVariable String code) {
        return fundService.getFromCacheByCode(code);
    }
}
