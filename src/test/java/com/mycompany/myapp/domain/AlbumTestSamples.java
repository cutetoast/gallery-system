package com.mycompany.myapp.domain;

import java.time.Instant;
import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class AlbumTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Album getAlbumSample1() {
        return new Album().id(1L).name("name1").event("event1").creationDate(Instant.parse("2024-01-01T00:00:00Z"));
    }

    public static Album getAlbumSample2() {
        return new Album().id(2L).name("name2").event("event2").creationDate(Instant.parse("2024-01-02T00:00:00Z"));
    }

    public static Album getAlbumRandomSampleGenerator() {
        return new Album()
            .id(longCount.incrementAndGet())
            .name(UUID.randomUUID().toString())
            .event(UUID.randomUUID().toString())
            .creationDate(Instant.now());
    }
}
