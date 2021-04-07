// react
import React, { useEffect, useState } from 'react';
// third-party
import { FormattedMessage } from 'react-intl';
import {
  OfferTimer,
  TimerPart,
  TimerPartValueDays,
  TimerPartLabel,
  TimerPartValueHours,
  TimerPartValueMinutes,
  TimerPartValueSeconds,
  TimerDots,
} from '~/styled-components/components/Timer';
const MINUTE = 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

interface Props {
  time: number;
}

function Timer(props: Props) {
  const { time } = props;
  const [passed, setPassed] = useState(0);
  const left = time - passed;

  const leftDays = Math.floor(left / DAY);
  const leftHours = Math.floor((left - leftDays * DAY) / HOUR);
  const leftMinutes = Math.floor(
    (left - leftDays * DAY - leftHours * HOUR) / MINUTE
  );
  const leftSeconds =
    left - leftDays * DAY - leftHours * HOUR - leftMinutes * MINUTE;

  const format = (value: number): string => `0${value}`.substr(-2);

  useEffect(() => {
    setPassed(0);

    const interval = setInterval(() => {
      setPassed((prev) => Math.min(prev + 1, time));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <OfferTimer>
      <TimerPart>
        <TimerPartValueDays>{format(leftDays)}</TimerPartValueDays>
        <TimerPartLabel>
          <FormattedMessage id="TEXT_TIMER_DAYS" />
        </TimerPartLabel>
      </TimerPart>
      <TimerDots />
      <TimerPart>
        <TimerPartValueHours>{format(leftHours)}</TimerPartValueHours>
        <TimerPartLabel>
          <FormattedMessage id="TEXT_TIMER_HOURS" />
        </TimerPartLabel>
      </TimerPart>
      <TimerDots />
      <TimerPart>
        <TimerPartValueMinutes>{format(leftMinutes)}</TimerPartValueMinutes>
        <TimerPartLabel>
          <FormattedMessage id="TEXT_TIMER_MINUTES" />
        </TimerPartLabel>
      </TimerPart>
      <TimerDots />
      <TimerPart>
        <TimerPartValueSeconds>{format(leftSeconds)}</TimerPartValueSeconds>
        <TimerPartLabel>
          <FormattedMessage id="TEXT_TIMER_SECONDS" />
        </TimerPartLabel>
      </TimerPart>
    </OfferTimer>
  );
}

export default Timer;
