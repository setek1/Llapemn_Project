import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { getCitaApi } from "../../api/cita";

moment.locale("es");
const localizer = momentLocalizer(moment);

const EventComponent = ({ event, view }) => {
  const isMonthView = view === "month";
  return (
    <div>
      <strong>
        {isMonthView
          ? `Especialista: ${event.especialista}, Hora: ${moment(
              event.start,
            ).format("LT")}`
          : event.title}
      </strong>
    </div>
  );
};

const holidayTranslations = {
  "New Year's Day": "Año Nuevo",
  "Labour Day": "Día del Trabajo",
  "National holiday": "Fiestas Patrias",
  "Christmas Day": "Navidad",
  "Good Friday": "Viernes Santo",
  "Holy Saturday": "Sábado Santo",
  "Day of the Glorious Cross of Our Lord Jesus Christ": "Día de la Cruz",
  "Immaculate Conception": "Día de la Inmaculada Concepción",
  "Navy Day": "Día de las Glorias Navales",
  "Columbus Day": "Día del Descubrimiento de Dos Mundos",
  "All Saints' Day": "Día de Todos los Santos",
  "Reformation Day": "Día de la Reforma Protestante",
  "Assumption of Mary": "Asunción de la Virgen",
  "Saint Peter and Saint Paul": "San Pedro y San Pablo",
  "Corpus Christi": "Corpus Christi",
  "Maundy Thursday": "Jueves Santo",
  "Battle of Arica": "Batalla de Arica",
  "National Day of Indigenous Peoples": "Día Nacional de los Pueblos Indígenas",
  "Our Lady of Mount Carmel": "Nuestra Señora del Carmen",
  "Army Day": "Día del Ejército",
  "All Saints": "Día de Todos los Santos",
};
const customMessages = {
  allDay: "Todo el día",
  previous: "<",
  next: ">",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  showMore: (total) => `+ Ver más (${total})`,
  noEventsInRange: "No hay citas por ahora",
};

export function Calendario() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchCitasYFeriados = async () => {
      try {
        const citas = await getCitaApi();
        const formattedEvents = citas.map((cita) => ({
          id: cita.id,
          title: `Sala: ${cita.sala_cita}, Paciente: ${
            cita.pa_data.nombre
          }, Especialista: ${cita.ep_data.first_name} ${
            cita.ep_data.last_name
          }, Hora: ${moment(cita.fecha + "T" + cita.hora).format(
            "LT",
          )} - ${moment(cita.fecha + "T" + cita.hora_fin).format("LT")}`,
          start: new Date(cita.fecha + "T" + cita.hora),
          end: new Date(cita.fecha + "T" + cita.hora_fin),
          estado: cita.estado,
        }));

        const year = new Date().getFullYear();
        const response = await axios.get(
          `https://date.nager.at/api/v3/NextPublicHolidays/CL`,
        );
        const holidayEvents = response.data.map((holiday) => ({
          title: holidayTranslations[holiday.name] || holiday.name,
          start: new Date(holiday.date + "T00:00:00"), // Agregar horario local
          end: new Date(holiday.date + "T00:00:00"), // Agregar horario local
          allDay: true,
          holiday: true,
        }));

        if (isSubscribed) {
          setEvents([...formattedEvents, ...holidayEvents]);
        }
      } catch (error) {
        console.error("Error al cargar datos", error);
      }
    };

    fetchCitasYFeriados();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const getEventColor = (event, start, end, isSelected) => {
    if (event.holiday) {
      return { style: { backgroundColor: "lightcoral" } }; // Estilo para días feriados
    }
    switch (event.estado) {
      case "programada":
        return { style: { backgroundColor: "#8BC926" } }; //verde
      case "cancelada":
        return { style: { backgroundColor: "#E5383A" } }; //rojo
      case "completada":
        return { style: { backgroundColor: "#0B4F6C" } }; //azul
      case "cambiada":
        return { style: { backgroundColor: "#885A89" } }; //morado
      default:
        return {};
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="calendar-container rounded-lg bg-gray-100 p-4 shadow">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 720 }}
              components={{
                event: EventComponent,
              }}
              eventPropGetter={getEventColor}
              messages={customMessages}
              className="rounded-lg text-black"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
