package com.ethara.taskmanager.service;

import com.ethara.taskmanager.entity.Project;
import com.ethara.taskmanager.entity.User;
import com.ethara.taskmanager.repository.ProjectRepository;
import com.ethara.taskmanager.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    // CREATE PROJECT
    public Project createProject(Project project, Long userId) {

        User user = userRepository.findById(userId)
                .orElseThrow();

        // ONLY ADMIN
        if (!user.getRole().equals("ADMIN")) {

            throw new RuntimeException(
                    "Only ADMIN can create project"
            );
        }

        project.setCreatedBy(user);

        return projectRepository.save(project);
    }

    // GET PROJECTS
    public List<Project> getAllProjects() {

        return projectRepository.findAll();
    }
}