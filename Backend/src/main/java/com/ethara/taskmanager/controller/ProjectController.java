package com.ethara.taskmanager.controller;

import com.ethara.taskmanager.entity.Project;
import com.ethara.taskmanager.service.ProjectService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")

@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    // CREATE PROJECT
    @PostMapping("/create")
    public Project createProject(
            @RequestBody Project project,
            @RequestParam Long userId
    ) {

        return projectService.createProject(project, userId);
    }

    // GET ALL PROJECTS
    @GetMapping
    public List<Project> getProjects() {

        return projectService.getAllProjects();
    }
}