#include <string>
#include "../include/cpp_code.h"

namespace cpp_code {
  std::string hello_world(const std::string& input) {
    return "Hello from C++! You said: " + input;
  }
}
