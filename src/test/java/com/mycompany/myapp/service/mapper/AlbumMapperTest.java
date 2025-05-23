package com.mycompany.myapp.service.mapper;

import static com.mycompany.myapp.domain.AlbumAsserts.*;
import static com.mycompany.myapp.domain.AlbumTestSamples.*;

import com.mycompany.myapp.IntegrationTest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;

@IntegrationTest
@ActiveProfiles("testdev")
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
