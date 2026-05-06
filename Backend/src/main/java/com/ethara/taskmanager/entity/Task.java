package com.ethara.taskmanager.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;

    @Enumerated(EnumType.STRING)
    private Status status;   // ✅ THIS MUST BE YOUR ENUM

    @ManyToOne
    private User assignedTo;

    @ManyToOne
    private Project project;

    private LocalDate dueDate;
}