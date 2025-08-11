package com.royalcar.car.mapper;

import com.royalcar.car.dto.CarDto;
import com.royalcar.car.entity.Car;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CarMapper {
    
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    Car toEntity(CarDto carDto);
    
    CarDto toDto(Car car);
    
    List<CarDto> toDtoList(List<Car> cars);
    
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    void updateEntity(@MappingTarget Car car, CarDto carDto);
}
