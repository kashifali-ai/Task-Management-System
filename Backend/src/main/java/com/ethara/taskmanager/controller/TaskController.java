package com.ethara.taskmanager.controller;

import com.ethara.taskmanager.entity.Status;
import com.ethara.taskmanager.entity.Task;
import com.ethara.taskmanager.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping("/create")
    public Task createTask(@RequestBody Task task,
                           @RequestParam Long projectId,
                           @RequestParam Long userId) {
        return taskService.createTask(task, projectId, userId);
    }

    @PutMapping("/update-status")
    public Task updateStatus(@RequestParam Long taskId,
                             @RequestParam Status status) {
        return taskService.updateStatus(taskId, status);
    }

    @GetMapping("/project")
    public List<Task> getTasks(@RequestParam Long projectId) {
        return taskService.getTasks(projectId);
    }
}