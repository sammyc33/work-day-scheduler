# Work Day Scheduler

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Application Details

A simple daily scheduling tool to help keep you on track during a standard work day. The calendar includes hours 8am - 7pm, to allow for a little flexibility with your day's start and end time.  

Today's date and the current time are displayed at the top of the page. In the left-hand column you'll see a list of times by hour. Past times are displayed in gray (rgb(143, 136, 136)), the current hour is highlighted in bright green (html color code #4ed84e), and future times appear in light yellow (#eff8cc). 

Enter meeting or event details into the center calendar line item and click the save icon at the right to save scheduled events in your browser's local storage. If you accidentally refresh the page, no problem! Because the saved items are in local storage, your browser will be able to recall them without interruption. 

---

## Technologies Used

- HTML
- CSS
- Moment.js
- jQuery

---
## Mock-up

![work-day-scheduler](https://github.com/sammyc33/portfolio/blob/main/assets/images/wdmock.png)

---

## Deployed Site

https://sammyc33.github.io/work-day-scheduler

---

## License Information

Please see repo for licensing details. 

---