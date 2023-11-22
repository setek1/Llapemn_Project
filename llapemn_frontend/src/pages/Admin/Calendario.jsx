import React, { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/es';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getCitaApi } from '../../api/cita'; // Asegúrate de que la ruta sea correcta


moment.locale('es');
const localizer = momentLocalizer(moment);

const EventComponent = ({ event, view }) => {
  const isMonthView = view === 'month';

  return (
    <div>
      <strong>
        {isMonthView
          ? `Especialista: ${event.especialista}, Hora: ${moment(event.start).format('LT')}`
          : event.title}
      </strong>
    </div>
  );
};

const customMessages = {
  allDay: 'Todo el día',
  previous: '<',
  next: '>',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  agenda: 'Agenda',
  date: 'Fecha',
  time: 'Hora',
  event: 'Evento',
  showMore: total => `+ Ver más (${total})`,
  noEventsInRange: 'No hay citas por ahora',
};

export function Calendario() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const citas = await getCitaApi();
        console.log('Datos de citas recibidos de la API:', citas);
        const formattedEvents = citas.map(cita => ({
          id: cita.id,
          title: `Sala: ${cita.sala_cita}, Paciente: ${cita.pa_data.nombre},  Especialista: ${cita.ep_data.first_name} ${cita.ep_data.last_name}, Hora: ${moment(cita.fecha + 'T' + cita.hora).format('LT')}`,
          paciente: cita.pa_data.nombre, // Agregar el nombre del paciente como propiedad
          especialista: `${cita.ep_data.first_name} ${cita.ep_data.last_name}`, // Agregar el nombre del especialista como propiedad
          start: new Date(cita.fecha + 'T' + cita.hora),
          end: new Date(cita.fecha + 'T' + cita.hora),
          estado: cita.estado,
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error al cargar citas desde la API', error);
      }
    };

    fetchCitas();
  }, []);

  const getEventColor = (event, start, end, isSelected) => {
    switch (event.estado) {
      case 'programada':
        return { style: { backgroundColor: 'green' } };
      case 'cancelada':
        return { style: { backgroundColor: 'red' } };
      case 'completada':
        return { style: { backgroundColor: 'blue' } };
      case 'cambiada':
        return { style: { backgroundColor: 'yellow' } };
      default:
        return {};
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <div className="calendar-container p-4 bg-gray-100 rounded-lg shadow">
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
              className="text-black rounded-lg"
              defaultView="agenda"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
