# Tính năng đã xong

## 2026-11-27 - Khung monorepo

- pnpm workspace `apps/*`, `packages/*`; `pnpm dev`, `pnpm build`, `pnpm typecheck` chạy cho toàn workspace. Node 22 trong `.nvmrc`, `packageManager` là pnpm 12.23.0.
- `@vortex-pups-two-friends/shared`: `TUNING` gồm `maxPaddleForce`, `boatLinearDamping`, `boatAngularDamping`, `simulatedLatencyMs`; kiểu `PaddleInput`; `ROOM_NAME = "boat_room"`.
- Git LFS cho `.blend`, `.glb`, `.gltf`, `.png`, `.jpg`, `.psd`, `.wav`, `.mp3`, `.ogg`. Thư mục `docs/playtest/`, `assets-src/`.

## 2026-11-27 - Client Vite React

- Vite, React 19, TypeScript; cài `three`, `@react-three/fiber`, `@react-three/drei`, `@colyseus/sdk`, `@types/three`.
- `typecheck` dùng `tsc -b` vì `tsconfig.json` của template chỉ trỏ sang các file con.
- Chưa kết nối server, chưa có scene 3D: làm ở #8 và #1.

## 2026-11-27 - Server Colyseus

- Template Colyseus 0.18 chạy trên HTTP server của Vite, cố định cổng 2567 với `strictPort`.
- Đã cài `@dimforge/rapier3d-compat` và package shared, chưa dùng Rapier.
- `pnpm-workspace.yaml` override bỏ `@colyseus/uwebsockets-transport` vì nó kéo `uWebSockets.js` từ GitHub, pnpm 12 chặn; dùng transport WebSocket mặc định. Cho phép build script `esbuild`, `msgpackr-extract`.

## 2026-11-27 - CI và GitHub

- `.github/workflows/ci.yml`: cài với `--frozen-lockfile`, kiểm tra format, typecheck, build trên mỗi push và PR.
- `main` bắt buộc qua PR và job `check` xanh. 4 milestone, 6 label `network`, `physics`, `input`, `art`, `playtest`, `bug`. License MIT.
- Viết lại lịch sử, bỏ trailer `Co-Authored-By`; repo đổi tên thành `Vortex-Pups-Two-friends`.

## 2026-11-27 - Dọn template, BoatRoom tối giản

- Server: xoá trang demo 2D, logic di chuyển mẫu, test và loadtest mẫu, `ecosystem.config.cjs`, route `/api/hello` và `/hi`, dependency thừa như `@colyseus/tools`, mocha, tsx.
- `BoatRoom` đăng ký dưới `ROOM_NAME`: tối đa 2 người, `Player` có `seat`, rớt mạng giữ chỗ 30 giây. `/monitor` và `/playground` chỉ bật khi dev.
- `vite build` của server chỉ build môi trường `colyseus`, ra `dist/server/server.mjs`, vì đã bỏ `index.html` của template.
- Client: xoá trang chào Vite, logo, `App.css`; `App.tsx` còn tiêu đề, `index.css` còn reset cơ bản.
- Gộp `.gitignore` của hai app vào file gốc.
- Hạn chế: ghế gán theo `players.size` nên vào lại có thể trùng ghế, sửa ở #8.

## 2026-11-27 - Prettier

- `.prettierrc`: thụt 4, YAML thụt 2, dòng 100 ký tự, dấu nháy kép, trailing comma. `.prettierignore` bỏ build, lockfile, env, asset nhị phân.
- Lệnh `pnpm format`, `pnpm format:check`; CI chạy `format:check` trước typecheck. Format lại toàn bộ code.

## 2026-11-27 - GDD bản 0.2 trong repo

- Tách Google Doc thành 14 file trong `docs/gdd/`, đọc từ `docs/gdd/README.md`. Bản 0.2 là nội dung chính, riêng mỹ thuật lấy từ bản 0.1.
- `networking.md` ghi thêm hiện trạng repo: server Colyseus riêng giữ quyền vật lý, thay cho mô hình host/client trong GDD.
- Bỏ `docs/GDD.md` trỏ link ngoài; README viết lại: mô tả, cách chạy, bảng lệnh, cấu trúc thư mục.

## 2026-11-27 - Issue và lộ trình Mốc 0

- 19 issue cho Mốc 0 "Hồ trống": #1 đến #7 viết chi tiết lại, #8 đến #19 mới. Mỗi issue có mục tiêu, phụ thuộc, checklist, tiêu chí hoàn thành.
- #20 ghi thứ tự làm theo 7 giai đoạn A đến G, đã ghim. Quy ước nhánh `feat/<số>-<mô-tả>`, PR ghi `Closes #<số>`.
- Issue MVP chỉ tạo sau khi playtest #19 có kết luận.
