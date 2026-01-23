"use client"
import React, { useState, useRef } from "react"
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import {
  CalendarHeader,
  CalendarEvent,
  FilterType,
  CalendarEventData,
} from "@/components/calendar"

const CalendarPage = () => {
  const calendarRef = useRef<FullCalendar>(null)
  const [activeFilters, setActiveFilters] = useState<FilterType[]>([
    "individual",
    "group",
    "events",
  ])
  const [currentTitle, setCurrentTitle] = useState("Week")

  // Sample events data
  const events: CalendarEventData[] = [
    {
      id: "1",
      title: "Mindfulness Practice",
      start: "2026-01-08T08:00:00",
      end: "2026-01-08T09:00:00",
      type: "self-guided",
    },
    {
      id: "2",
      title: "Mindfulness Practice",
      start: "2026-01-10T10:00:00",
      end: "2026-01-10T11:00:00",
      type: "self-guided",
    },
    {
      id: "3",
      title: "Finding Calm in Everyday Moments",
      start: "2026-01-11T10:30:00",
      end: "2026-01-11T14:30:00",
      type: "group",
      participants: [
        { name: "John", image: "https://i.pravatar.cc/150?img=1" },
        { name: "Jane", image: "https://i.pravatar.cc/150?img=2" },
        { name: "Mike", image: "https://i.pravatar.cc/150?img=3" },
        { name: "Sara", image: "https://i.pravatar.cc/150?img=4" },
      ],
    },
    {
      id: "4",
      title: "Finding Calm in Everyday Moments",
      start: "2026-01-07T09:30:00",
      end: "2026-01-07T10:30:00",
      type: "group",
      participants: [
        { name: "John", image: "https://i.pravatar.cc/150?img=5" },
        { name: "Jane", image: "https://i.pravatar.cc/150?img=6" },
        { name: "Mike", image: "https://i.pravatar.cc/150?img=7" },
      ],
    },
    {
      id: "5",
      title: "Managing anxiety",
      start: "2026-01-09T15:00:00",
      end: "2026-01-09T16:00:00",
      type: "individual",
      therapist: "Dr. Mette Andersen",
    },
    {
      id: "6",
      title: "Mindfulness Practice",
      start: "2026-01-12T15:00:00",
      end: "2026-01-12T16:00:00",
      type: "self-guided",
    },
    {
      id: "7",
      title: "Managing anxiety",
      start: "2026-01-04T06:00:00",
      end: "2026-01-04T07:00:00",
      type: "individual",
      therapist: "Dr. Mette Andersen",
    },
  ]

  // Filter events based on active filters
  const filteredEvents = events.filter((event) => {
    if (event.type === "self-guided" && activeFilters.includes("events"))
      return true
    if (event.type === "individual" && activeFilters.includes("individual"))
      return true
    if (event.type === "group" && activeFilters.includes("group")) return true
    return false
  })

  // Convert to FullCalendar format
  const calendarEvents = filteredEvents.map((event) => ({
    id: event.id,
    title: event.title,
    start: event.start,
    end: event.end,
    extendedProps: {
      type: event.type,
      therapist: event.therapist,
      participants: event.participants,
    },
  }))

  const handlePrev = () => {
    calendarRef.current?.getApi().prev()
  }

  const handleNext = () => {
    calendarRef.current?.getApi().next()
  }

  const handleFilterToggle = (filter: FilterType) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    )
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "individual":
        return { backgroundColor: "transparent", borderColor: "transparent" }
      case "group":
        return { backgroundColor: "transparent", borderColor: "transparent" }
      case "self-guided":
        return { backgroundColor: "transparent", borderColor: "transparent" }
      default:
        return { backgroundColor: "transparent", borderColor: "transparent" }
    }
  }

  return (
    <div className="bg-white rounded-2xl p-6">
      <CalendarHeader
        title={currentTitle}
        onPrev={handlePrev}
        onNext={handleNext}
        activeFilters={activeFilters}
        onFilterToggle={handleFilterToggle}
      />

      <div className="calendar-wrapper">
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          headerToolbar={false}
          slotMinTime="06:00:00"
          slotMaxTime="22:00:00"
          allDaySlot={false}
          weekends={true}
          events={calendarEvents}
          eventContent={(eventInfo) => {
            const eventData: CalendarEventData = {
              id: eventInfo.event.id,
              title: eventInfo.event.title,
              start: eventInfo.event.start!,
              end: eventInfo.event.end!,
              type: eventInfo.event.extendedProps.type,
              therapist: eventInfo.event.extendedProps.therapist,
              participants: eventInfo.event.extendedProps.participants,
            }
            return <CalendarEvent event={eventData} />
          }}
          eventBackgroundColor="transparent"
          eventBorderColor="transparent"
          dayHeaderFormat={{ weekday: "short" }}
          dayHeaderContent={(args) => (
            <div className="text-center py-2">
              <div className="text-grey-500 text-sm font-medium">
                {args.date.toLocaleDateString("en-US", { weekday: "short" })}
              </div>
              <div className="text-black text-2xl font-semibold mt-1">
                {args.date.getDate()}
              </div>
            </div>
          )}
          slotLabelFormat={{
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          }}
          height="auto"
          expandRows={true}
          datesSet={(dateInfo) => {
            const start = dateInfo.start
            const end = new Date(dateInfo.end)
            end.setDate(end.getDate() - 1)
            setCurrentTitle("Week")
          }}
        />
      </div>

      <style jsx global>{`
        .calendar-wrapper .fc {
          font-family: inherit;
        }
        .calendar-wrapper .fc-theme-standard td,
        .calendar-wrapper .fc-theme-standard th {
          border-color: #e5e7eb;
        }
        .calendar-wrapper .fc-theme-standard .fc-scrollgrid {
          border: none;
        }
        .calendar-wrapper .fc-col-header-cell {
          border: none !important;
          background: transparent;
        }
        .calendar-wrapper .fc-timegrid-slot {
          height: 60px;
        }
        .calendar-wrapper .fc-timegrid-slot-label {
          font-size: 12px;
          color: #6b7280;
        }
        .calendar-wrapper .fc-event {
          margin: 2px;
          border-radius: 8px;
          overflow: hidden;
        }
        .calendar-wrapper .fc-timegrid-event-harness {
          margin-right: 4px;
        }
        .calendar-wrapper .fc-timegrid-col {
          border-right: 1px solid #f3f4f6;
        }
        .calendar-wrapper .fc-day-today {
          background-color: transparent !important;
        }
        .calendar-wrapper .fc-timegrid-now-indicator-line {
          border-color: #ef4444;
        }
        .calendar-wrapper .fc-timegrid-now-indicator-arrow {
          border-color: #ef4444;
          border-top-color: transparent;
          border-bottom-color: transparent;
        }
      `}</style>
    </div>
  )
}

export default CalendarPage
