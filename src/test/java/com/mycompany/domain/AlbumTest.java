package com.mycompany.domain;

@Test
class AlbumTest {

    @Test
    void testAlbumValidation() {
        Album album = new Album().name("Test Album").creationDate(Instant.now());

        assertThat(album.getName()).isEqualTo("Test Album");
        assertThat(album.getCreationDate()).isNotNull();
    }
}
