package com.ethara.taskmanager.service;

import com.ethara.taskmanager.entity.*;
import com.ethara.taskmanager.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    public Task createTask(Task task, Long projectId, Long userId) {

        Project project = projectRepository.findById(projectId).orElseThrow();
        User user = userRepository.findById(userId).orElseThrow();

        task.setProject(project);
        task.setAssignedTo(user);
        task.setStatus(Status.TODO); // ✅ now correct enum

        return taskRepository.save(task);
    }

    public Task updateStatus(Long taskId, Status status) {
        Task task = taskRepository.findById(taskId).orElseThrow();
        task.setStatus(status);
        return taskRepository.save(task);
    }

    public List<Task> getTasks(Long projectId) {
        return taskRepository.findByProjectId(projectId);
    }
}