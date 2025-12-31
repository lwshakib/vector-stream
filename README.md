# 🎥 Vector Stream

Vector Stream is a high-performance video processing and adaptive streaming service designed to handle large-scale video uploads, transcoding, and delivery. It automatically processes videos into multiple resolutions and formats (like HLS/M3U8) to ensure smooth playback across all devices and network conditions.

---

## 🌟 Features

- **🚀 Automated Transcoding**: Automatically converts uploaded videos into professional streaming formats.
- **📶 Adaptive Bitrate Streaming**: Generates M3U8 playlists for seamless quality switching (HLS).
- **📺 Multi-Resolution Support**: Processes videos into various resolutions (360p, 480p, 720p, 1080p).
- **🔗 Unified Playback URL**: Provides a single, optimized URL for worldwide video distribution.
- **⚡ Built for Performance**: Powered by Bun and Docker for lightning-fast processing and deployment.

---

## 🏗️ Architecture

Vector Stream is composed of several specialized services:

- **`web`**: The frontend portal for users to upload and manage videos.
- **`server`**: The central API gateway managing metadata, users, and processing jobs.
- **`processing-container`**: A dedicated Dockerized environment for high-efficiency video transcoding using FFmpeg.
- **`bucket-server`**: Secure storage service for raw and processed video assets.

---

## 🛠️ Tech Stack

- **Runtime**: [Bun](https://bun.sh/)
- **Backend Framework**: [Express](https://expressjs.com/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Containerization**: [Docker](https://www.docker.com/)
- **Styles**: Vanilla CSS & Modern Design Principles

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed locally.
- [Docker](https://www.docker.com/) for running processing containers.
- A database (PostgreSQL/MySQL) compatible with Prisma.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lwshakib/vector-stream.git
   cd vector-stream
   ```

2. Install dependencies for all services:
   ```bash
   # Root
   bun install

   # Individual services
   cd server && bun install
   cd ../web && bun install
   ```

3. Configure environment variables (refer to `.env.example` in each directory).

4. Run the development environment:
   ```bash
   bun run dev
   ```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) for more details.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by the Vector Stream Team
</p>