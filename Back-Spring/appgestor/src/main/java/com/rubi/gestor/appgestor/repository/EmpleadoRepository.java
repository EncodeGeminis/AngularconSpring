package com.rubi.gestor.appgestor.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rubi.gestor.appgestor.model.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Long>{   
}
