package com.mycompany.web.rest;

import static org.assertj.core.api.Assertions.assertThat;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

public final class TestUtil {

    private static final ObjectMapper mapper = createObjectMapper();

    private static ObjectMapper createObjectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_EMPTY);
        mapper.registerModule(new JavaTimeModule());
        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);
        return mapper;
    }

    public static <T> void equalsVerifier(Class<T> clazz) {
        try {
            T domainObject1 = clazz.getDeclaredConstructor().newInstance();
            assertThat(domainObject1.toString()).isNotNull();
            assertThat(domainObject1).isEqualTo(domainObject1);
            assertThat(domainObject1).hasSameHashCodeAs(domainObject1);
            // Test with an instance of another class
            Object testOtherObject = new Object();
            assertThat(domainObject1).isNotEqualTo(testOtherObject);
            assertThat(domainObject1).isNotEqualTo(null);
            // Test with an instance of the same class
            T domainObject2 = clazz.getDeclaredConstructor().newInstance();
            assertThat(domainObject1).isNotEqualTo(domainObject2);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
