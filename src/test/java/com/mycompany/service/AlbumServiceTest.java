package com.mycompany.service;

import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.domain.Album;
import com.mycompany.repository.AlbumRepository;
import java.time.Instant;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class AlbumServiceTest {

    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private AlbumService albumService;

    private Album album;

    @BeforeEach
    public void setup() {
        album = new Album().name("Test Album").event("Test Event").creationDate(Instant.now());
    }

    @Test
    void testSortByEvent() {
        Album saved = albumRepository.save(album);
        assertThat(albumService.findAllSortedByEvent()).isNotEmpty();
    }

    @Test
    void testSortByDate() {
        Album saved = albumRepository.save(album);
        assertThat(albumService.findAllSortedByDate()).isNotEmpty();
    }
}
