# Earthworm Extension: Refractory Period

*This optional experiment extends the [Earthworm Electrophysiology](Earthworm.md) lab. It is not part of the printed Lab Manual.*

## Background

The **absolute refractory period** is the minimum amount of time needed for a neuron to fire a second action potential. This is caused by the inactivation of sodium channels after an action potential — it takes time for them to close, to then be reopened by a depolarizing stimulus. Since we're recording from many axons, your measured refractory period will be more variable than for a single axon. We'll define the absolute refractory period as the time when the amplitude of the second CAP is 30% of the first.

After an action potential, the membrane of the axon is also hyperpolarized, due to the slowness of K⁺ channels closing. So, there is a period of time where the neuron requires more voltage to fire an action potential. This period is called the **relative refractory period**. In this lab, we'll identify it as the period where the amplitude of the second CAP is 30–90% of the first.

**In this experiment you will:**
- Estimate the absolute and relative refractory period between action potentials

*Before you begin, prepare your PowerLab, LabChart, and earthworm as described in the [Earthworm Electrophysiology](Earthworm.md) lab, and determine the threshold for your MGF.*

## Determine the refractory period

In the next step, you'll determine the shortest time between stimuli where you can elicit two different CAPs from the MGF. In other words, we'll determine the relative and absolute refractory period of these fibers.

1. Set your pulse height so that you can comfortably elicit a response from the MGF.
2. **In Setup > Stimulator, change Repeats to 2** in order to play multiple pulses.
3. We also need to change the time between each stimulus. PowerLab thinks of this interval as Hz. To start, we want 15 ms between each stimulus.
   > **Note:** Remember that Hertz (Hz) means events per second. So, 1 Hz = 1 event per second, and 10 Hz = 10 events per second. 1 ÷ frequency (in Hz) = time between stimuli (in seconds).

:::{admonition} Questions for reflection
:class: tip
- How many milliseconds would there be between each stimulus at 10 Hz stimulation?
- For 15 ms between each stimulus, what should the frequency of stimulation (in Hz) be?
:::

4. Fill out this chart with the corresponding Hz values for each interval length:

| Interval (ms) | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5 | 4 | 3 | 2 | 1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Freq. (Hz) | | | | | | | | | | | | | | | |

5. **Change your Max Repeat Rate** to the equivalent frequency for 15 ms intervals.
6. Change your Pulse Width to 0.2 ms and your Pulse Height to the threshold for your MGF.
7. **Press > Start** to record a trial with two stimuli, separated by 15 ms.
8. Right-click and choose **Add Marker > Clamp to Trace** to place a marker at the moment the stimulus occurs. Move your cursor to the peak of the action potential. Look at the ΔV on the right-hand side to see the change in voltage from that point.
9. **Measure the amplitude of your first and second action potentials.** Determine how strong the second was relative to the first (e.g. if AP #2 amplitude was half as high as #1, it would be 50%). Record your response in row one of Table 1.
10. Decrease the duration between stimuli by 1 ms by changing the Repeat Rate to the Hz for a 14 ms interval.
11. **Record the amplitudes and corresponding percentages for each stimulus interval in Table 1.**
12. At some point, AP #2 will diminish below 30% of AP #1. We can consider this our absolute refractory period.
    > **Note:** Depending on the latency of your MGF CAP, it may be difficult to see a CAP with a stimulus interval of 1 or 2 ms. Reduce the stimulus interval to as short as you can before the MGF CAP is cut off by the second stimulus. If the shortest stimulus interval is >3 ms, you should move your pins closer together.
13. Save your LabChart file.
    > **Note:** If you have data that doesn't seem quite right, you should repeat your experiment. You must be upfront about your number of repeats in your lab report, comprehensively reporting all of the data that you collected.

**Table 1.** Amplitudes of CAPs elicited by stimuli with decreasing stimulus intervals.

| Stimulus Interval (ms) | #1 CAP Amplitude | #2 CAP Amplitude | % #2/#1 |
|---|---|---|---|
| 15 | | | |
| 14 | | | |
| 13 | | | |
| 12 | | | |
| 11 | | | |
| 10 | | | |
| 9 | | | |
| 8 | | | |
| 7 | | | |
| 6 | | | |
| 5 | | | |
| 4 | | | |
| 3 | | | |
| 2 | | | |
| 1 | | | |

:::{admonition} Questions for reflection
:class: tip
- What was the shortest duration between stimuli where the second action potential was less than 90% but more than 30% of the original CAP amplitude?
- What was the shortest duration between stimuli where the second CAP was diminished below 30%?
- Which of these values is your absolute refractory period, and which is the relative refractory period?
:::
