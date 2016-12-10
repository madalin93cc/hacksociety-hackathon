package com.hacksociety.service;

import com.hacksociety.domain.enums.NasdaqEnum;
import com.hacksociety.service.dto.NasdaqDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@Transactional
public class NasdaqService {
    private static Map<String, NasdaqDTO> cache = new HashMap<>();
    List<NasdaqDTO> nasdaqs;

    @Autowired
    private FundService fundService;

    public List<NasdaqDTO> getNasdaqs() {
        if (nasdaqs == null) {
            nasdaqs = new ArrayList<>();
            for (NasdaqEnum nasdaq : NasdaqEnum.values()) {
                NasdaqDTO nasdaqDTO = new NasdaqDTO(nasdaq.getTicker(), nasdaq.getUrl(), nasdaq.getName());
                Map<String, Object> latestPefr = fundService.getLastesPerf(nasdaq.getTicker());

                if (latestPefr != null) {
                    nasdaqDTO.setLatestPerf(latestPefr);
                    nasdaqs.add(nasdaqDTO);
                }
            }
        }

        return nasdaqs;
    }

    public NasdaqDTO getNasdaq(String code) {
        Optional<NasdaqDTO> nasdaqDTO = getNasdaqs().stream().filter(nasdaq -> nasdaq.getTicker().equals(code)).findAny();

        if (nasdaqDTO.isPresent()) {
            return nasdaqDTO.get();
        }

        return null;
    }
}
