package com.mycompany.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AlbumServiceTest {

    @Autowired
    private AlbumService albumService;

    @Test
    void testSortAlbumsByEvent() {
        // Test album sorting by event logic
    }

    @Test
    void testSortAlbumsByDate() {
        // Test album sorting by date logic
    }
}
