# Vortex Pups – Two Friends

Game co-op hai người cùng chèo một chiếc thúng: mỗi người điều khiển một mái chèo, phải phối hợp lực để lái thúng qua cổng và tránh phao.

📄 **GDD:** [Google Doc](TODO-dán-link-Google-Doc-vào-đây) (xem thêm [docs/GDD.md](docs/GDD.md))

## Cách chạy

Yêu cầu: Node 22 (xem `.nvmrc`), pnpm.

```bash
pnpm install
pnpm dev
```

- Client: http://localhost:5173
- Server (Colyseus): ws://localhost:2567

## Cấu trúc thư mục

- `apps/client` – Vite + React + Three.js (react-three-fiber), giao diện và hiển thị game.
- `apps/server` – Colyseus server, chạy mô phỏng vật lý Rapier, nguồn sự thật của state.
- `packages/shared` – Code dùng chung: thông số `TUNING`, kiểu message mạng, logic vật lý thúng.
