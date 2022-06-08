import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import etLocale from 'date-fns/locale/et';
import { format } from 'date-fns';
import { Button, Dialog, TextField } from "@mui/material";
import EventIcon from '@mui/icons-material/Event';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

type WeekHighlightProps = PickersDayProps<Date> & {
    dayIsBetween: boolean;
    isFirstDay: boolean;
    isLastDay: boolean;
};

// Not 100% sure how this component works..
export const WeekHighlight = styled(PickersDay, {
    shouldForwardProp: (prop) =>
        prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})<WeekHighlightProps>(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
    ...(dayIsBetween && {
        borderRadius: 0,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.primary.dark,
        },
    }),
    ...(isFirstDay && {
        borderTopLeftRadius: '50%',
        borderBottomLeftRadius: '50%',
    }),
    ...(isLastDay && {
        borderTopRightRadius: '50%',
        borderBottomRightRadius: '50%',
    }),
})) as React.ComponentType<WeekHighlightProps>;

interface WeekPickerProps {
    value: Date | null,
    setValue: (date: Date | null) => void;
}

const WeekPicker = ({ value, setValue, }: WeekPickerProps) => {
    //const [value, setValue] = useState<Date | null>(new Date());
    const [calenderOpen, setCalenderOpen] = useState<boolean>(false);

    const handleCalenderClose = () => {
        setCalenderOpen(false);
    }

    const getCurrentWeek = (date: Date) => {

        const weekStart = startOfWeek(date, {
            locale: etLocale,
            weekStartsOn: 1
        });

        const weekEnd = endOfWeek(date, {
            locale: etLocale,
            weekStartsOn: 1
        });

        return format(weekStart, "dd.MM.yyyy") + " - " + format(weekEnd, "dd.MM.yyyy")
    }

    const renderWeekHighlight = (
        date: Date,
        selectedDates: Array<Date | null>,
        pickersDayProps: PickersDayProps<Date>,
    ) => {
        if (!value) {
            return <PickersDay {...pickersDayProps} />;
        }

        const start = startOfWeek(value, {
            locale: etLocale,
            weekStartsOn: 1
        });

        const end = endOfWeek(value, {
            locale: etLocale,
            weekStartsOn: 1
        });

        const dayIsBetween = isWithinInterval(date, { start, end });
        const isFirstDay = isSameDay(date, start);
        const isLastDay = isSameDay(date, end);

        return (
            <WeekHighlight
                {...pickersDayProps}
                disableMargin
                dayIsBetween={dayIsBetween}
                isFirstDay={isFirstDay}
                isLastDay={isLastDay}
            />
        );
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={etLocale}>
            <Button onClick={() => setCalenderOpen(true)} sx={{
                border: "1px solid #272727",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                height: "50px",
                width: "210px",
                gap: "10px",
                '&:hover': {
                    backgroundColor: "white",
                },
            }}>
                {value ? getCurrentWeek(value) : "undefined"}
                <EventIcon/>
            </Button>
            <Dialog onClose={handleCalenderClose} open={calenderOpen}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    label="Week picker"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        handleCalenderClose();
                    }}
                    renderDay={renderWeekHighlight}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Dialog>
        </LocalizationProvider>
    );
}

export default WeekPicker;
