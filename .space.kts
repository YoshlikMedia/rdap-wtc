job("Test & Lint WTC") {
    container(displayName = "Test and Lint", image = "denoland/deno") {
        shellScript {
            interpreter = "/bin/bash"
            content = """
                    echo "Checking Format"
                    deno fmt --check

                    echo "Linting Project"
                    deno lint
                """
        }
    }
}