package com.hacksociety.web.rest.reference;

import com.hacksociety.domain.enums.NasdaqEnum;
import com.hacksociety.service.NasdaqService;
import com.hacksociety.service.dto.NasdaqDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/public")
public class NasdaqResource {

    @Autowired
    private NasdaqService nasdaqService;

    private static List<NasdaqDTO> nasdaqs;

    static {
        nasdaqs = new ArrayList<>();
        for (NasdaqEnum nasdaq : NasdaqEnum.values()) {
            nasdaqs.add(new NasdaqDTO(nasdaq.getTicker(), nasdaq.getUrl(), nasdaq.getName()));
        }
    }

    @RequestMapping(value = "/nasdaqs", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public List<NasdaqDTO> getAllNasdaqs() {
        return nasdaqService.getNasdaqs();
    }
}
