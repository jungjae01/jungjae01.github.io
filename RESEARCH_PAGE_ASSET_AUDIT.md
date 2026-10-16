# Research page source and asset audit

Reviewed October 16, 2026. Scope: the four existing research publication/poster pages and the new NewTen research project. The implementation follows `Codex_Research_Pages_Redesign_Brief.md`. Source PDFs and all pre-existing media are preserved.

## Page and source map

| Public route (under `papers/`) | Type and bibliographic identity | Primary evidence |
| --- | --- | --- |
| `01-bu-mbl-vascular-ress-2022/` | 2022 research poster; *Minimally Invasive Soft Robotic Prototypes Provide Variable Occlusion in a Simplified Aortic Flow Model* | [Supplied poster](assets/documents/mbl-vascular-poster.pdf); [BU laboratory publication record](https://sites.bu.edu/ranzani-lab/publications/) corroborates ReSS 2022, Chicago. The original poster controls author order and affiliations. No DOI is invented. |
| `02-bu-mbl-laparoscopic-hsmr-2023/` | *A Soft Laparoscopic Grasper for Retraction of the Small Intestine*, HSMR 2023, pp. 97–98; DOI 10.31256/HSMR2023.51 | [Supplied two-page proceedings paper](assets/documents/mbl-laparoscopy-paper.pdf), visually read because the PDF is raster-only; [official proceedings](https://www.hamlynsymposium.org/wp-content/uploads/2023/07/HSMR23-Proceedings-Final.pdf). |
| `03-bu-mbl-laparoscopic-device-2024/` | *A Soft Robotic, Modular Laparoscopic Grasper for Atraumatic Retraction of the Small Intestine*, *Device* 2(10), 100560; October 18, 2024 | [Publisher / DOI](https://doi.org/10.1016/j.device.2024.100560), [full peer-reviewed article](https://pmc.ncbi.nlm.nih.gov/articles/PMC12309402/), and [primary full-text XML](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12309402/fullTextXML). ScienceDirect blocked automated access; the complete article XML and figures were accessible through NCBI/Europe PMC. |
| `04-snu-srbl-surrogate-advanced-2025/` | *Bridging High-Fidelity Simulations and Physics-Based Learning using a Surrogate Model for Soft Robot Control*, *Advanced Intelligent Systems* 8(2), e202500696 (2026); first online October 30, 2025 | [Wiley full article](https://doi.org/10.1002/aisy.202500696), [author-hosted publisher PDF](https://softrobotics.snu.ac.kr/publications/HongTH_AIS_2025.pdf), [original code/data record](https://github.com/SNU-SRBL/SoftRobot_sim2real), and its README-linked [maintained repository](https://github.com/ndolphin-github/Sim2Real_framework_SoftRobot). The existing route's `2025` suffix is retained. |
| `05-cmu-newten-tendon-simulation/` | *NewTen: Friction-Aware Tendon Transmission for GPU-Accelerated Dexterous Hand Simulation*; research project, ongoing | Owner-supplied portfolio assets in `assets/images/research/5-cmu-robotics-institute/`, existing CMU experience page, and read-only checks against matching project media manifests, reproduction records, and implementation notes. No private source, raw telemetry, calibration footage, or credentials are copied into the site. |

The [A-SLIP reference](https://a-slip.github.io/) was inspected as a live page, including its mobile layout. Its research-story hierarchy informed the presentation. Its source, graphics, videos, branding, frameworks, and decorative treatments are not included in this repository.

## Source corrections and claim boundaries

### 2022 vascular poster

- All 14 authors are transcribed in poster order, including Sean Mori Carroll. The three original affiliation groups are retained; an abbreviated web publication listing does not override the poster.
- The poster supports a 5 mm insertion profile, 30 mm expanded diameter, and deployment inside a 27 mm inner-diameter silicone tube. These are prototype/benchtop conditions, not patient outcomes.
- Figure 4 plots syringe pressure in kPa against modeled-aorta proximal/distal pressure in mmHg. The reported fit statistics belong to this pressure characterization. Sample counts and error-bar definitions are not supplied and are not invented.
- Initial pressure characterization occurred **without the stabilizing brace**. Flow made deployment difficult and motivated the separate MEMS-inspired bracing mechanism. No integrated closed-loop controller, ex vivo validation, in vivo result, or clinical benefit is claimed.
- The citation is a real poster-style `@misc` entry, with no fabricated article DOI. Portfolio-only PCB/testbed role statements are omitted from the scientific narrative.

### 2023 HSMR conference contribution

- The original paper supplies author initials and two affiliations: Boston University College of Engineering and Boston Medical Center. Unsupported expanded departmental affiliations from the old page were removed.
- The source supports an 18 mm trocar, approximately 22 mm bend radius, tip force above 2.5 N, a 500 g weighted silicone specimen at 250 kPa, and explanted porcine-intestine manipulation.
- The printed sensor result is a **maximum reported MAE of 0.16 N**, with normal-force calibration over 0–10 N and shear over 0–2 N. It is not presented as a separate normal-only statistic or the later journal's installed-sensor validation. Training/validation split and calibration context are stated.
- The conference stage has no detachable passive-retraction anchor. Its proposed future tests involve abdominal phantoms and simulated dilated intestine. Reciprocal version links keep it distinct from the expanded 2024 journal article.

### 2024 MAIR journal article

- The eight ordered authors, six affiliation mappings, article number, issue, DOI, and publication date follow the full article.
- The 6.62 N result is an actuator blocked-force measurement at 250 kPa, not an intestinal contact force. The 500 g test uses a weighted silicone surrogate. Dilated specimens are ex vivo porcine bowel.
- Table 1's installed normal-force sensor MAEs and standard deviations are reproduced with their per-sensor identities. Calibration and subsequent installed-sensor validation are distinguished; temporal alignment/postprocessing is described.
- The passive-retraction demonstration uses a separate 200 kPa inflation/sealing workflow. Magnetic alignment and threaded needlescopic mechanical retention are distinguished. An inconsistent source screw-size label is omitted.
- The one-hour ex vivo hold was followed by clinician visual inspection. No histological absence of damage, clinical safety, in vivo outcome, or user-study result is inferred.
- The documented individual author contribution supports Jungjae Lee's participation in fabrication. No broader individual responsibility is assigned.

### Surrogate-model journal article

- The final bibliographic year is 2026; first-online publication is October 30, 2025. Both appear visibly and in metadata; the existing URL is unchanged.
- The model connects a real three-bellows manipulator, calibrated SOFA finite elements/POD reduction, learned Transformer-PINN dynamics/mappings, and a constrained six-link PyBullet surrogate. FEM is not claimed to run directly at reinforcement-learning rollout speed.
- The results table labels simulation and real hardware separately and includes source mean ± standard deviation: circle, star, external-load deformation, and hybrid position/force control. The novel 3D figure-eight result and interruption study retain their conditions.
- Recovery is described relative to pneumatic **reconnection**. The approximately 2 Hz tracking limitation belongs to physical actuation in the tested hardware task, not simulator throughput.
- The original data-availability repository's README directs users to the maintained public code repository; the live Code link uses that destination.

### NewTen research project

- The masthead, homepage section, metadata, captions, and final status section consistently identify ongoing research. Schema metadata uses `CreativeWork`; no journal, DOI, acceptance claim, or fabricated BibTeX is supplied.
- The architecture explicitly separates **CPU transmission calculations** from Newton/Warp physics. A future all-GPU transmission implementation or benchmarked speedup is not claimed.
- The selected ORCA comparison uses estimated routes, including an estimated index flexor. It does not establish measured tendon geometry, full-hand route acceptance, physical friction identification, hardware prediction accuracy, or policy-transfer gains.
- The comparison uses μ = 0 and μ = 0.25 under identical commands. These are simulation settings, not measured physical coefficients. The video's actual lower panels are **index PIP joint angle** and **transmission hysteresis**. The brief's suggested contact-force panel does not appear in the supplied final video and was not added.
- Both full-resolution plots and the five-panel video use preserved matched replay `101326_013929_poster_asset_replay`, associated with source experiment `101126_211648_camera_b_60_20`. The approved reproduction record documents 0–12 s, 0.002 s sample interval, and 6,001 samples per condition. Original full joint trajectories were not retained; selected-state/retained-telemetry checks do not establish complete joint-by-joint identity with the original experiment. The page states this replay limit.
- The generic four-link routing demonstration is a **different** simulation, μ = 0.2, displayed at 5× slower playback. It is not an ORCA geometry or hardware validation result.
- ChArUco/ArUco work is described as a measurement pipeline under development. No private camera footage or unverified measured joint/force trace is published.

## Figure and media rights

- **Device:** complete source figures are reproduced without relabeling, cropping, or remixes, with linked article credits and [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/). New downloads are byte copies of source figure JPEGs. Existing source figures remain unchanged.
- **AIS:** complete original embedded figures were extracted from the author-hosted publisher PDF with `pdfimages`, retaining source panels, labels, units, legends, and encoding. Credits link to the article and [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). No numerical curves were redrawn or guessed from images.
- **Poster/HSMR:** these are owner-supplied, coauthored PDFs and existing figure exports. Neither PDF supplies an explicit Creative Commons grant. The pages identify their sources without inventing a reuse license. The one new fabrication export retains the complete original poster figure. Broader third-party reuse permission is not established by this audit.
- **NewTen:** supplied project assets are used as requested by the owner. Only a first-frame video poster is derived; the original video and all original media remain intact. Private project records were used for verification, not published as resources.

## Media inspection and deliberate omissions

All 15 supplied NewTen assets were inspected: every PNG, metadata and representative frames for all three MP4s and three GIFs. The 13 existing AIS figure exports, the four existing MAIR figures, all vascular/HSMR candidate figures, and both source PDFs were also inspected before page implementation.

| Video / candidate | Audited metadata | Decision |
| --- | --- | --- |
| `newten_orca_five_panel.mp4` | H.264, 1920×944, 30 fps, 12.034 s encoded duration, silent | Full controlled video in Evaluation & Results; actual t=7 s still used as poster. Two same-run source PNG plots accompany it. |
| `newten_partial_routing_slow_motion_5x.mp4` | H.264, 1920×1080, 20 fps, 6.45 s, silent | Methodology demonstration; 0–1.28 s of simulated motion at 5× slower playback. New poster is decoded frame 0. |
| `newten_partial_routing.mp4` | H.264, 1920×1080, 100 fps, 1.29 s, silent | Inspected but redundant with the more readable controlled slow version. Original retained. |
| NewTen three GIF variants | Five-panel 1200×590 / 181 frames; routing 960×540 / 64 or 129 frames | Inspected and retained; not embedded because controlled MP4s are smaller and avoid forced looping. |
| NewTen single-tendon stills and extra routing stills | Original 1920×1080 PNGs | Inspected and retained. Only complementary routing states are used; no redundant gallery. |
| `srbl-project2.mp4` | H.264, 2560×1440, 30 fps, 30.634 s, silent | GUI/SOFA desktop recording inspected at representative early/middle/late frames. Excluded from the journal's results because it lacks a matching source-task/hardware record. It remains used by the existing lab page. |
| Wiley supplement | Publisher lists an 89.9 MB ZIP; automated download returned 403 | No uninspected supplemental video or broken download control is embedded. Static complete article figures carry the evidence. |

No corresponding vascular/HSMR demonstration videos, public NewTen poster PDF, verified public NewTen code release, approved hardware-validation footage, or additional numerical hardware data were supplied. These are omitted; no placeholder media controls, synthetic plots, or invented publication resources fill the gaps.

Verified external platform references are credited as tools, not as NewTen source-code releases: [Newton](https://github.com/newton-physics/newton), [Warp](https://github.com/NVIDIA/warp), and [ORCA robot description](https://github.com/orcahand/orcahand_description).

## Selected media inventory

The table below is generated from the five implemented pages. Existing source files keep their original names; new complete publication figure exports and the decoded video poster live in `assets/research-pages/`. Hashes identify the exact chosen files.

| Asset | Page / source / treatment | Dimensions; size | SHA-256 |
| --- | --- | --- | --- |
| [MBL/01-bu-mbl-vascular-ress-2022/device-concept.png](assets/images/research/1-bu-morphable-biorobotics-lab/01-bu-mbl-vascular-ress-2022/device-concept.png) | Page 01 · Figure. Source: Kinnicutt et al., Figure 3 . | 3510×3435; 6,046,590 B | `aaccc55de93db5d9e38379c1bb45667ed350da508b6431322c16bb6ea49b11c1` |
| [exports/vascular/laminated-balloon-fabrication.png](assets/research-pages/vascular/laminated-balloon-fabrication.png) | Page 01 · Figure. Source: Kinnicutt et al., Figure 2 . | 1644×991; 647,567 B | `ecb04ca4b83d6124466207d36b6eea74f44e0ad82461936393f9226ba7371253` |
| [MBL/01-bu-mbl-vascular-ress-2022/bracing-mechanism.png](assets/images/research/1-bu-morphable-biorobotics-lab/01-bu-mbl-vascular-ress-2022/bracing-mechanism.png) | Page 01 · Figure. Source: Kinnicutt et al., Figure 5 . | 3345×1440; 1,288,889 B | `257a28c9850a0d379879610e2369e1d6b1829da79c67f300f6e614b7ae57dbb0` |
| [MBL/01-bu-mbl-vascular-ress-2022/pressure-characterization.png](assets/images/research/1-bu-morphable-biorobotics-lab/01-bu-mbl-vascular-ress-2022/pressure-characterization.png) | Page 01 · Figure. Source: Kinnicutt et al., Figure 4 . | 3600×2250; 3,033,053 B | `fabf35627b19aeda45a6e8215be2c1d684893f9f01a0373f0008af4f27595b22` |
| [MBL/01-bu-mbl-vascular-ress-2022/integrated-device-testing.png](assets/images/research/1-bu-morphable-biorobotics-lab/01-bu-mbl-vascular-ress-2022/integrated-device-testing.png) | Page 01 · Figure. Source: Kinnicutt et al., Figure 6 . | 3465×990; 1,552,160 B | `48beb1abe580339f37437dfceb97fa5c1cf35ae07a169d2d2bafa9c3333243a3` |
| [MBL/02-bu-mbl-laparoscopic-hsmr-2023/grasper-design-workflow.png](assets/images/research/1-bu-morphable-biorobotics-lab/02-bu-mbl-laparoscopic-hsmr-2023/grasper-design-workflow.png) | Page 02 · Figure. Source: Kinnicutt et al., Figure 1 . | 920×1365; 617,971 B | `7dcdff6d349c52c0e30c875d5f3a2fa3cf618764db90c4d339162f63297ee773` |
| [MBL/02-bu-mbl-laparoscopic-hsmr-2023/grasper-preliminary-results.png](assets/images/research/1-bu-morphable-biorobotics-lab/02-bu-mbl-laparoscopic-hsmr-2023/grasper-preliminary-results.png) | Page 02 · Figure. Source: Kinnicutt et al., Figure 2 . | 910×1340; 777,784 B | `cd1c66f2ecd0c61ec0a0ab56177d96453d9c5b47deec74f8b85f54bf67e6153a` |
| [exports/mair/figure-1-surgical-workflow.jpg](assets/research-pages/mair/figure-1-surgical-workflow.jpg) | Page 03 · Figure. Source: Kinnicutt et al., Figure 1 · CC BY-NC-ND 4.0. | 1200×1153; 696,052 B | `421e2469083172a69219ffc590e693fa8772ce45e5495bb05b3dba46c7c387f3` |
| [MBL/03-bu-mbl-laparoscopic-device-2024/mair-design-overview.png](assets/images/research/1-bu-morphable-biorobotics-lab/03-bu-mbl-laparoscopic-device-2024/mair-design-overview.png) | Page 03 · Figure. Source: Kinnicutt et al., Figure 2 · CC BY-NC-ND 4.0. | 1333×584; 528,805 B | `516f42536f750a62473b85e08b39ebc1e92fd1ce5797827ca0cc765ae01b29be` |
| [exports/mair/figure-10-hybrid-anchoring.jpg](assets/research-pages/mair/figure-10-hybrid-anchoring.jpg) | Page 03 · Figure. Source: Kinnicutt et al., Figure 10 · CC BY-NC-ND 4.0. | 1333×558; 422,800 B | `b83c9574d8f41ca1290fdbdc60c472a278e748946c64643d2a93f781def5dcb6` |
| [exports/mair/figure-4-sensor-calibration.jpg](assets/research-pages/mair/figure-4-sensor-calibration.jpg) | Page 03 · Figure. Source: Kinnicutt et al., Figure 4 · CC BY-NC-ND 4.0. | 1334×776; 949,830 B | `a50011dcc812d627dcd4927afd3b5f9c6940d0a57951f1bf68c77dc44b377f67` |
| [MBL/03-bu-mbl-laparoscopic-device-2024/mair-grasp-validation.png](assets/images/research/1-bu-morphable-biorobotics-lab/03-bu-mbl-laparoscopic-device-2024/mair-grasp-validation.png) | Page 03 · Figure. Source: Kinnicutt et al., Figure 8 · CC BY-NC-ND 4.0. | 1332×557; 536,540 B | `0cf650f9ec54ce4f6925547a434594bc2e25e2205f248370908a0eb3ca7e8a25` |
| [exports/mair/figure-5-normal-force-validation.jpg](assets/research-pages/mair/figure-5-normal-force-validation.jpg) | Page 03 · Figure. Source: Kinnicutt et al., Figure 5 · CC BY-NC-ND 4.0. | 1328×1334; 1,478,145 B | `901f081c80ceb88efb7ea0754a1d83818d68cfee4a35826e918a956a625bfb1d` |
| [MBL/03-bu-mbl-laparoscopic-device-2024/mair-passive-retraction-workflow.png](assets/images/research/1-bu-morphable-biorobotics-lab/03-bu-mbl-laparoscopic-device-2024/mair-passive-retraction-workflow.png) | Page 03 · Figure. Source: Kinnicutt et al., Figure 12 · CC BY-NC-ND 4.0. | 1750×1304; 3,131,406 B | `a158128d3aa9a8be115d03580fa0d5ed56da604c278c75b8731e7f97d62e5b2d` |
| [exports/surrogate/figure-1-framework.jpg](assets/research-pages/surrogate/figure-1-framework.jpg) | Page 04 · Figure. Source: Hong et al., Figure 1 · CC BY 4.0. | 1830×1720; 322,988 B | `ea1ba1edd80447c96665ce3429a6bfce8f7c0074190329bfe5b0e2ed3686b158` |
| [exports/surrogate/figure-2-calibration.jpg](assets/research-pages/surrogate/figure-2-calibration.jpg) | Page 04 · Figure. Source: Hong et al., Figure 2 · CC BY 4.0. | 1893×992; 240,785 B | `f122260459e0cbf71fcb71d0f1141beca748fdf3281b97947d60b8b174753c49` |
| [exports/surrogate/figure-3-dynamics-and-mapping.jpg](assets/research-pages/surrogate/figure-3-dynamics-and-mapping.jpg) | Page 04 · Figure. Source: Hong et al., Figure 3 · CC BY 4.0. | 1978×1042; 252,655 B | `c8fd0dd2545ad84f9b7f74ddb060b21daa60bf4557f1906293c7832599107e4f` |
| [exports/surrogate/figure-4-surrogate.jpg](assets/research-pages/surrogate/figure-4-surrogate.jpg) | Page 04 · Figure. Source: Hong et al., Figure 4 · CC BY 4.0. | 1894×1060; 244,142 B | `701d66c828ded119386c64cd4e0662018e0cbf59f46a0c06dcb031d4517894ed` |
| [exports/surrogate/figure-6-sim2real-setup.jpg](assets/research-pages/surrogate/figure-6-sim2real-setup.jpg) | Page 04 · Figure. Source: Hong et al., Figure 6 · CC BY 4.0. | 2022×1089; 285,647 B | `e20b1647574bd53bc9c00e6f0b84d581137ce770605db2bdf715fd40e725218e` |
| [exports/surrogate/figure-8-control-results.png](assets/research-pages/surrogate/figure-8-control-results.png) | Page 04 · Figure. Source: Hong et al., Figure 8 · CC BY 4.0. | 1523×1253; 953,784 B | `2ac9ccb61f012f5e834514eed5a766a67eaa7f40ba84fa906094af69b9a2f9d8` |
| [exports/surrogate/figure-9-generalization-robustness.jpg](assets/research-pages/surrogate/figure-9-generalization-robustness.jpg) | Page 04 · Figure. Source: Hong et al., Figure 9 · CC BY 4.0. | 1643×1490; 263,453 B | `59eb4499ce51562c46c32e102a647c7302d35456a6c1ee81621147b742993cec` |
| [CMU/newten_architecture.png](assets/images/research/5-cmu-robotics-institute/newten_architecture.png) | Page 05 · Figure. Source: supplied NewTen architecture diagram. | 4008×2774; 510,974 B | `742783fc22e9e97a14a72bb9c6103b0552b1f674c76a5958c9bc7fa5cd93c9c7` |
| [CMU/partial_routing_initial.png](assets/images/research/5-cmu-robotics-institute/partial_routing_initial.png) | Page 05 · Figure. Source: supplied NewTen partial-routing still. | 1920×1080; 48,662 B | `1afb8b45dd99103971d88da3b9c312934fe752b188f2239bb680251569b2b8b5` |
| [CMU/partial_routing_s_shape.png](assets/images/research/5-cmu-robotics-institute/partial_routing_s_shape.png) | Page 05 · Figure. Source: supplied NewTen partial-routing still. | 1920×1080; 53,178 B | `48fd24ba305a39e4fa26be6db02011e62ff5270e7978e6a46ede9c52d743eafd` |
| [exports/newten/partial-routing-poster.png](assets/research-pages/newten/partial-routing-poster.png) | Page 05 · Video poster. Supplied NewTen simulation; video poster | 1920×1080; 126,705 B | `bb8e2bd567e90626b94c335b77b75fd1377b10a7fb2c25c511163cb5d05e76a4` |
| [CMU/newten_partial_routing_slow_motion_5x.mp4](assets/images/research/5-cmu-robotics-institute/newten_partial_routing_slow_motion_5x.mp4) | Page 05 · Video. Supplied NewTen simulation; video | 1920×1080; h264; 6.450 s; 267,615 B | `023bd2ded23a6be0aa84ce45f0702f51f667e085065100262c4898b181f1590e` |
| [CMU/newten_orca_five_panel_t7s.png](assets/images/research/5-cmu-robotics-institute/newten_orca_five_panel_t7s.png) | Page 05 · Video poster. Source: supplied NewTen five-panel media; matched replay conditions and provenance . | 1920×944; 431,093 B | `dd9621f0d4c88c64c9b4d9686d7825f32fad947c3eb1ce52271c20097eadb880` |
| [CMU/newten_orca_five_panel.mp4](assets/images/research/5-cmu-robotics-institute/newten_orca_five_panel.mp4) | Page 05 · Video. Source: supplied NewTen five-panel media; matched replay conditions and provenance . | 1920×944; h264; 12.034 s; 1,187,698 B | `da3ac092306b343ea368575870a0c9e4b688f0cc37148b205ba0b0b1091f0c36` |
| [CMU/orca_joint_angle_comparison_poster_v2.png](assets/images/research/5-cmu-robotics-institute/orca_joint_angle_comparison_poster_v2.png) | Page 05 · Figure. Source: supplied NewTen poster plot from the same preserved ORCA replay . | 3000×1880; 205,930 B | `ea3086c9551a0eb9e4654f9685ccacacfc441623950010db3e00aaf70bad17c9` |
| [CMU/orca_transmission_hysteresis_poster_v2.png](assets/images/research/5-cmu-robotics-institute/orca_transmission_hysteresis_poster_v2.png) | Page 05 · Figure. Source: supplied NewTen poster plot from the same preserved ORCA replay . | 3000×1880; 253,200 B | `e7c559f69e58cc919fa6926c8dc7e200b06c6666a6f250a24481db17c154c17e` |

## Implementation and verification

### Implemented files

The four existing page routes are preserved. All five pages share the same scholarly masthead, section navigation, eight-section narrative beginning with System Overview, full-resolution figure links, and accessible static reading experience. Videos appear only within the relevant NewTen methodology and results sections. The 2023 conference and 2024 journal pages remain separate and link to each other.

| Change | Files |
| --- | --- |
| Rebuilt existing pages | `papers/01-bu-mbl-vascular-ress-2022/index.html`; `papers/02-bu-mbl-laparoscopic-hsmr-2023/index.html`; `papers/03-bu-mbl-laparoscopic-device-2024/index.html`; `papers/04-snu-srbl-surrogate-advanced-2025/index.html` |
| Added ongoing research page | `papers/05-cmu-newten-tendon-simulation/index.html` |
| Added shared presentation and progressive enhancement | `papers/shared/research-page.css`; `papers/shared/research-page.js` |
| Updated discovery links and metadata | `index.html`; `labs/5-cmu-robotics-institute/index.html`; `labs/3-snu-soft-robotics-bionics-lab/index.html` |
| Added source-faithful media | The 13 new files under `assets/research-pages/`, individually identified in the inventory above: one vascular figure, four Device figures, seven AIS figures, and one NewTen video poster |
| Updated documentation | `README.md`; `CONTENT_REVIEW.md`; this audit |
| Removed superseded, unreferenced presentation files | `papers/shared/paper-page.css`; `papers/shared/paper-page.js`; the former `page.css` in the 2023 HSMR, 2024 Device, and surrogate-model page directories |

The homepage now exposes NewTen in Research Projects and links it from the CMU research experience. Existing unrelated homepage content and all 20 course/project entries are preserved. No production dependency or build configuration was introduced. Earlier directory-renaming work was retained.

### Verification results

Final checks completed October 16, 2026. Browser checks used Chromium 156 with desktop and mobile viewport emulation; they do not represent testing on every browser or physical device.

| Check | Result |
| --- | --- |
| Responsive research-page checks | **35 passed:** all five pages at 320, 375, 390, 768, 1024, 1280, and 1440 CSS pixels. No document overflow, failed image decoding, local HTTP errors, or JavaScript errors. |
| Automated accessibility | **10 passed:** axe WCAG 2 A/AA and WCAG 2.1 AA checks at 390 and 1440 pixels on every page; zero reported violations. |
| Keyboard behavior | Skip link reaches the main content on all five pages; affiliation disclosures expand and collapse with the keyboard. Visible focus and reduced-motion behavior were checked. |
| Citation copying | All four publication/poster citations copied their exact BibTeX through the browser's native clipboard API in an isolated browser context. Simulated clipboard denial also selected the citation and announced the manual-copy fallback. |
| Video behavior | Both embedded NewTen MP4s decoded and played with native controls, correct dimensions, and no autoplay or looping. Silent-video descriptions and source conditions remain readable beside the media. |
| JavaScript disabled | **Five passed:** narratives, figures, links, resources, affiliations, and citations remain available. |
| Homepage regression checks | **Seven widths passed:** no document overflow; Research Projects and the ongoing NewTen link are present; all 20 existing course/project cards remain. |
| Local links and fragments | **442 references across 31 HTML files checked:** no missing local files or fragment targets. Reciprocal conference/journal links and homepage/lab/project links resolve. |
| Static structure and metadata | Every page has one H1, the required eight section IDs, the shared CSS/JS, a static System Overview figure, and source-appropriate publication or project metadata. |
| Media integrity | All pre-existing source PDFs and media retain their starting hashes. The 30 selected media files match the dimensions, sizes, and SHA-256 values recorded above. |
| Code and diff review | Shared JavaScript syntax check and `git diff --check` passed. Task-specific changes were compared with a pre-redesign snapshot to preserve earlier repository work. |

Full-page and masthead screenshots at 390 and 1440 pixels were inspected for all five pages. Dense scientific panels retain their original aspect ratios and provide original-resolution links; accompanying prose and result tables supply readable conditions and values on narrow screens.

The unavailable materials remain those recorded above: the publisher-blocked Wiley supplement, matching vascular/HSMR videos, and an approved public NewTen poster, code release, or hardware-validation dataset. Their absence is represented directly in the pages; no results, media, or publication records were fabricated.
