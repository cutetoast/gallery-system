package com.mycompany.service;

import com.mycompany.domain.Album;
import com.mycompany.repository.AlbumRepository;
import java.util.List;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AlbumService {

    private final AlbumRepository albumRepository;

    public AlbumService(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    public List<Album> findAllSortedByEvent() {
        return albumRepository.findAll(Sort.by("event"));
    }

    public List<Album> findAllSortedByDate() {
        return albumRepository.findAll(Sort.by("creationDate").descending());
    }
}
