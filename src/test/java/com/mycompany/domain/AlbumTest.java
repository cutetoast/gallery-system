package com.mycompany.domain;

import static org.assertj.core.api.Assertions.assertThat;

import com.mycompany.myapp.domain.Album;
import java.time.Instant;
import org.junit.jupiter.api.Test;

class AlbumTest {

    @Test
    void testAlbumValidation() {
        Album album = new Album().name("Test Album").creationDate(Instant.now());

        assertThat(album.getName()).isEqualTo("Test Album");
        assertThat(album.getCreationDate()).isNotNull();
    }
}
