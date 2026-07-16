# Media Plan

Recommended raster figures should be exported as WebP or AVIF where practical. Use figure-only exports or carefully cropped source figures, not screenshots of full journal pages.

| Section | Expected filename | Recommended content | Recommended dimensions | Suggested alt text | Suggested paper figure | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Hero | framework-overview.webp | Clean overview of real robot, SOFA FEM model, Transformer-PINN dynamics learning, PyBullet surrogate, and sim-to-real control loop | 1800 x 1100 px | Overview of the three-domain framework connecting a real pneumatic soft manipulator, a SOFA finite-element model, a PyBullet surrogate model, physics-informed dynamics learning, and sim-to-real reinforcement learning. | Figure 1 | Missing; placeholder shown |
| Motivation | real-and-fem-model.webp | Physical three-bellows manipulator beside tetrahedral SOFA FEM reconstruction | 1600 x 950 px | The physical pneumatic soft manipulator beside its volumetric finite-element model in SOFA. | Figure 2a and Figure 2b | Missing; placeholder shown |
| Calibration | model-calibration.webp | Physical setup, FEM construction, state variables, pressure mapping, and randomized pressure / force snapshot collection | 1800 x 1100 px | Calibration pipeline connecting motion-capture measurements from the real robot with pressure-driven SOFA simulations and reduced-order state data. | Figure 2 | Missing; placeholder shown |
| Dynamics | dynamics-architecture.webp | Temporal feature sequence, Transformer encoder, PINN prediction stage, physics residual, and combined loss | 1800 x 1000 px | Transformer and physics-informed neural network architecture used to predict soft-manipulator velocity from time-series state, pressure, and external-force inputs. | Figure 3a | Missing; placeholder shown |
| Surrogate | surrogate-construction.webp | Boundary-node extraction, fitted collision radii, stacked surrogate links, and rotational / prismatic joint arrangement | 1800 x 1050 px | Construction of the six-link PyBullet surrogate from FEM boundary geometry, with rotational and prismatic joints representing bending and extension. | Figure 4 | Missing; placeholder shown |
| Reinforcement learning | rl-environment-and-tasks.webp | Agent-environment interaction, position and force rewards, trajectory surface, and combined reward manifold | 1800 x 1050 px | Customized reinforcement-learning environment for trajectory tracking, force-induced deformation estimation, and hybrid position-force control. | Figure 5 | Missing; placeholder shown |
| Sim-to-real | sim2real-pipeline.webp | Motion-capture setup, PyBullet-to-real mapping pipeline, mirrored task environments, and three validation tasks | 1800 x 1050 px | Sim-to-real pipeline translating a policy trained in PyBullet into pressure commands for the real pneumatic manipulator. | Figure 6 | Missing; placeholder shown |
| Validation | model-validation.webp | Workspace alignment, normalized calibration errors, forward dynamics prediction, surrogate-state matching, and inverse pressure estimation | 1800 x 1100 px | Comparison of real, FEM, and surrogate workspaces with forward and inverse dynamics prediction results. | Figure 7 | Missing; placeholder shown |
| Results | control-results.webp | Circular/star trajectories, force-induced displacement estimation, hybrid contact trajectory execution, and force profiles | 1800 x 1100 px | Simulation and real-robot results for trajectory tracking, force-induced deformation estimation, and hybrid position-force control. | Figure 8 | Missing; placeholder shown |
| Robustness | generalization-and-robustness.webp | Unseen 3D figure-eight trajectory, recovery after pneumatic-line disconnection, and position error versus command frequency | 1800 x 1100 px | Evaluation of unseen 3D trajectory tracking, recovery after a temporary pneumatic disturbance, and hardware bandwidth limitations. | Figure 9 | Missing; placeholder shown |

## Optional Videos

| Expected filename | Recommended content | Encoding | Playback guidance | Status |
| --- | --- | --- | --- | --- |
| trajectory-circle.mp4 | Circular trajectory tracking in simulation and/or hardware | MP4 H.264 | Muted, plays inline, controls enabled, poster image supplied, no autoplay with sound, captions or textual description | Not added |
| trajectory-star.mp4 | Star trajectory tracking in simulation and/or hardware | MP4 H.264 | Muted, plays inline, controls enabled, poster image supplied, no autoplay with sound, captions or textual description | Not added |
| force-deformation.mp4 | Force-induced deformation estimation task | MP4 H.264 | Muted, plays inline, controls enabled, poster image supplied, no autoplay with sound, captions or textual description | Not added |
| hybrid-control.mp4 | Hybrid position-force control on tilted surface | MP4 H.264 | Muted, plays inline, controls enabled, poster image supplied, no autoplay with sound, captions or textual description | Not added |
| disturbance-recovery.mp4 | Recovery after temporary pneumatic-line disconnection | MP4 H.264 | Muted, plays inline, controls enabled, poster image supplied, no autoplay with sound, captions or textual description | Not added |

Do not add empty video elements to the live page. Add video markup only after the corresponding video and poster file exist.
