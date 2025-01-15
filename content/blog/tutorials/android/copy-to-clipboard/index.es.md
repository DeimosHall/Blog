---
title: "Copiar al portapapeles usando Jetpack Compose"
date: 2023-01-28T08:56:07-06:00
author: Francisco Torres
draft: false
section: "post"
cover: "https://drive.google.com/thumbnail?id=1--a6Ttiy6JisvBbJ_83UMQM-9UwAQbNa&sz=w1920-h1080"
useRelativeCover: false
CoverCaption: ""
toc: false
showReadingTime: true
---

En este artículo aprenderemos a crear una función para copiar texto al portapapeles. La manera de manejar el contexto en la aplicación es ligeramente diferente.

La app que estoy usando para este ejemplo es un administrador de contraseñas donde necesito copiar al portapapeles desde el text field. Puedes encontrar el proyecto en mi Github en este link: https://github.com/DeimosHall/Glocker.git. **Sin embargo, puedes seguir los pasos en tu propia app**.

{{< image
src="https://drive.google.com/thumbnail?id=1r0nk98DrPZfWTxH2l_RfL9dSGkZ3C4JK&sz=w1920-h1080"
alt="General project"
style="width: auto; border-radius: 10px;" >}}

Como puedes ver en la imagen, estoy usando una función llamada `copyToClipboard` que recibe dos parámetros, el contexto y un texto. Obtener el texto a copiar depende de tu lógica y es muy fácil, así que veamos cómo obtener el contexto.

## Obtener el contexto

En el modulo principal de tu app necesitas inicializar el contexto usando `LocalContext.current`. Una vez que lo tengas, puedes pasarlo como argumento a las vistas que lo necesiten. Por ejemplo, mi text field esta dentro del modulo `TopContent`, así que le paso el contexto como argumento.

{{< code language="kotlin" >}}
@Composable
fun MyApp() {
    val myOptions = getOptions(titles = listOf("Capital letters", "Numbers", "Symbols"))
    val mySlider = getSliderInfo()
    val myPassword = getPassword()
    val context = LocalContext.current

    Column {
        MyTitle()
        Box(modifier = Modifier.padding(25.dp)) {
            Column(
                modifier = Modifier.fillMaxSize(),
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.SpaceBetween
            ) {
                TopContent(options = myOptions, slider = mySlider, myPassword, context)
                GenerateButton(options = myOptions, slider = mySlider, myPassword)
            }
        }
    }
}
{{< /code >}}

El text field de la contraseña recibe el contexto del modulo `MyApp()`, por lo que enviamos ese contexto a la función `copyToClipboard`.

{{< code language="kotlin" >}}
@Composable
fun PasswordField(
    options: List<CheckboxInfo>,
    slider: SliderInfo,
    password: PasswordInfo,
    context: Context
) {
    Box(modifier = Modifier.padding(15.dp)) {
        OutlinedTextField(
            modifier = Modifier.fillMaxWidth(),
            value = password.value,
            onValueChange = {},
            placeholder = { Text(text = "Password") },
            shape = RoundedCornerShape(16.dp),
            enabled = false,
            trailingIcon = {
                IconButton(onClick = {
                    copyToClipboard(
                        context = context,
                        text = password.value
                    )
                }) {
                    Icon(
                        painter = painterResource(id = R.drawable.ic_content_copy_24),
                        contentDescription = "Copy icon"
                    )
                }
            }
        )
    }
}
{{< /code >}}

La función de copiar es la siguiente. Ten en cuenta que la etiqueta "password" es porque estoy copiando una contraseña, deberías reemplazarla con un etiqueta que describa lo que estás copiando.

{{< code language="kotlin" >}}
fun copyToClipboard(context: Context, text: String) {
    val clipboardManager =
        context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
    val clip = ClipData.newPlainText("password", text)
    clipboardManager.setPrimaryClip(clip)
}
{{< /code >}}

Si tienes problemas, asegúrate de que estás importando estas bibliotecas:

{{< code language="kotlin" >}}
import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
{{< /code >}}
