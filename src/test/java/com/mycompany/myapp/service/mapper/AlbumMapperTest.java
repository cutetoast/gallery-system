package com.mycompany.myapp.service.mapper;

import static com.mycompany.myapp.domain.AlbumAsserts.*;
import static com.mycompany.myapp.domain.AlbumTestSamples.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AlbumMapperTest {

    @Autowired
    private AlbumMapper albumMapper;

    @Test
    void shouldConvertToDtoAndBack() {
        var expected = getAlbumSample1();
        var actual = albumMapper.toEntity(albumMapper.toDto(expected));
        assertAlbumAllPropertiesEquals(expected, actual);
    }
}
